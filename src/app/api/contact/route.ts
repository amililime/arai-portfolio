import { Resend } from 'resend';

interface ContactRequestBody {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

export interface ContactResponse {
  ok: boolean;
  error?: string;
  id?: string;
}

const RECIPIENT = 'hello@araimoleri.com';

// Swap to the verified-domain sender once araimoleri.com is verified in Resend.
const FROM_TEST = 'Araí Moleri Portfolio <onboarding@resend.dev>';
const FROM_VERIFIED = 'Araí Moleri <hello@araimoleri.com>';
const FROM = FROM_TEST;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request): Promise<Response> {
  let body: ContactRequestBody;
  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return Response.json<ContactResponse>(
      { ok: false, error: 'Invalid JSON body' },
      { status: 400 },
    );
  }

  const { name, email, message } = body;

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return Response.json<ContactResponse>(
      { ok: false, error: 'Name, email and message are required' },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json<ContactResponse>(
      { ok: false, error: 'Invalid email address' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json<ContactResponse>(
      { ok: false, error: 'Email service is not configured' },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: RECIPIENT,
    replyTo: email,
    subject: `Nuevo mensaje de contacto de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #18181b; line-height: 1.6;">
        <p style="margin:0 0 4px;"><strong>Nombre:</strong> ${safeName}</p>
        <p style="margin:0 0 16px;"><strong>Email:</strong> ${safeEmail}</p>
        <hr style="border:none; border-top:1px solid #e4e4e7; margin:16px 0;" />
        <p style="white-space:pre-wrap; margin:0;">${safeMessage}</p>
      </div>
    `,
  });

  if (error) {
    return Response.json<ContactResponse>(
      { ok: false, error: error.message ?? 'Failed to send email' },
      { status: 502 },
    );
  }

  return Response.json<ContactResponse>({ ok: true, id: data?.id });
}
