// supabase/functions/send-contact-email/index.ts
// Create this file in your project root: supabase/functions/send-contact-email/index.ts

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

interface ContactFormData {
  fullName: string
  email: string
  organization?: string
  phoneNumber?: string
  message: string
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      }
    })
  }

  try {
    const formData: ContactFormData = await req.json()

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
    }

    // Save to Supabase database (optional but recommended)
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          organization: formData.organization,
          phone_number: formData.phoneNumber,
          message: formData.message,
          submitted_at: new Date().toISOString()
        }
      ])

    if (dbError) {
      console.error('Database error:', dbError)
      // Continue even if DB insert fails - still send email
    }

    // Send email using Resend
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Ayulex Contact Form <onboarding@resend.dev>', // Change this after domain verification
        to: ['amanrajce@gmail.com'],  // Using verified email for testing
        subject: `New Contact Form Submission from ${formData.fullName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          ${formData.organization ? `<p><strong>Organization:</strong> ${formData.organization}</p>` : ''}
          ${formData.phoneNumber ? `<p><strong>Phone:</strong> ${formData.phoneNumber}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `
      })
    })

    if (!emailRes.ok) {
      const errorData = await emailRes.text()
      console.error('Resend API error:', errorData)
      throw new Error('Failed to send email')
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully!' 
      }),
      { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process form submission',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
  }
})