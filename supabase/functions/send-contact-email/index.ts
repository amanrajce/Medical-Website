const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface ContactData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const contactData: ContactData = await req.json();

    // Here you would integrate with your email service (SendGrid, Resend, etc.)
    // For now, we'll just log the data and return success
    console.log("New contact form submission:", contactData);

    // In a real implementation, you would send an email like this:
    // await sendEmail({
    //   to: 'admin@healthcare-company.com',
    //   subject: `New Contact Form Submission from ${contactData.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${contactData.name}</p>
    //     <p><strong>Email:</strong> ${contactData.email}</p>
    //     ${contactData.company ? `<p><strong>Company:</strong> ${contactData.company}</p>` : ''}
    //     ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
    //     <p><strong>Message:</strong></p>
    //     <p>${contactData.message}</p>
    //   `
    // });

    return new Response(
      JSON.stringify({ success: true, message: "Contact form submitted successfully" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});