type EmailConfig = {
    serviceId: string,
    templateId: string,
    publicKey: string,
}


if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
    throw new Error('Missing required environment variables for NEXT_PUBLIC_EmailJS configuration');
}


const emailConfig: EmailConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
}

export default emailConfig;