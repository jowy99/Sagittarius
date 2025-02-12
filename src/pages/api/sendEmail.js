import nodemailer from "nodemailer";

export async function POST({ request }) {
  try {
    const body = await request.text();
    const params = new URLSearchParams(body);

    const nombre = params.get("name");
    const apellidos = params.get("lastname");
    const correo = params.get("email");
    const mensaje = params.get("msg");

    // Configurar el transporte de Nodemailer
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true, // Asegúrate de que STARTTLS esté habilitado
        auth: {
          user: import.meta.env.EMAIL_USER,
          pass: import.meta.env.EMAIL_PASS,
        },
    });

    // Configurar el correo a enviar
    const mailOptions = {
        from: import.meta.env.EMAIL_USER,
        to: import.meta.env.EMAIL_USER,
        subject: "Nueva solicitud de contacto",
        html: `
          <div style="background-color: #1e293b; color: #f1f5f9; font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="text-align: center; padding-bottom: 16px;">
                  <h1 style="font-size: 24px; font-weight: bold; color: #ffffff; margin: 0;">Portfolio</h1>
                </td>
              </tr>
              <tr>
                <td style="text-align: left;">
                  <h2 style="font-size: 20px; font-weight: 600; color: #ffffff; margin-bottom: 12px;">Nueva solicitud de contacto</h2>
                  <p style="font-size: 16px; margin-bottom: 16px; color: #d1d5db;">Has recibido una nueva solicitud de contacto.</p>
                </td>
              </tr>
              <tr>
                <td style="background-color: #334155; padding: 16px; border-radius: 8px; color: #ffffff; margin-bottom: 16px;">
                  <p style="margin: 0; font-size: 16px;"><strong>Nombre:</strong> ${nombre}</p>
                  <p style="margin: 0; font-size: 16px;"><strong>Apellido:</strong> ${apellidos}</p>
                  <p style="margin: 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${correo}" style="color: #3b82f6; text-decoration: none;">${correo}</a></p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 style="font-size: 18px; font-weight: 600; color: #ffffff; margin-bottom: 8px;">Mensaje:</h3>
                  <div style="background-color: #334155; padding: 16px; border-radius: 8px; color: #ffffff;">
                    <p style="margin: 0; font-size: 16px;">${mensaje}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="text-align: center; padding-top: 16px;">
                  <a href="mailto:${correo}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 16px;">
                    Responder al mensaje
                  </a>
                </td>
              </tr>
              <tr>
                <td style="text-align: center; padding-top: 24px; font-size: 14px; color: #94a3b8;">
                  © 2025 Portfolio. All rights reserved.
                </td>
              </tr>
            </table>
          </div>
        `,
    };
    await transporter.sendMail(mailOptions);

    // Redirigir a la página principal con éxito
    return new Response(null, {
      status: 302,
      headers: { Location: "/" },
    });
  } catch (error) {
    console.error("Error enviando correo:", error);

    // Redirigir a la página principal con error
    return new Response(null, {
      status: 302,
      headers: { Location: "/" },
    });
  }
}