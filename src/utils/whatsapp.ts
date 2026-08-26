import { BUSINESS } from "../data/business";

/**
 * Generates a WhatsApp API link for a course enquiry.
 * @param courseName The name of the course the user is interested in.
 */
export function getCourseEnquiryUrl(courseName: string = "Advanced Makeup & Beautician Course"): string {
  const text = `Hi R Crown Salon, I am interested in the ${courseName}. Please share the course details, syllabus, upcoming batch and admission process.`;
  return `${BUSINESS.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a WhatsApp API link for a salon or makeup service enquiry.
 * @param serviceName Optional specific service name.
 */
export function getSalonEnquiryUrl(serviceName?: string): string {
  const serviceDetail = serviceName ? ` about your "${serviceName}" service` : " about your makeup and salon services";
  const text = `Hi R Crown Salon, I would like to enquire${serviceDetail}. Please share the available services and appointment details.`;
  return `${BUSINESS.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a WhatsApp link from form data.
 */
export function getCustomEnquiryUrl(data: {
  name: string;
  phone: string;
  whatsapp: string;
  course: string;
  batch: string;
  message: string;
}): string {
  const text = `New Enquiry from Website:\n` +
    `---------------------------\n` +
    `Name: ${data.name}\n` +
    `Phone: ${data.phone}\n` +
    `WhatsApp: ${data.whatsapp}\n` +
    `Interest: ${data.course}\n` +
    `Preferred Batch: ${data.batch}\n` +
    `Message: ${data.message || 'N/A'}`;
  
  return `${BUSINESS.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
}
