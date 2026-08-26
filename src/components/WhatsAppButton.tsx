import { MessageSquare } from "lucide-react";
import { getCourseEnquiryUrl } from "../utils/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={getCourseEnquiryUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center justify-center p-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-out text-sm font-semibold tracking-wide uppercase whitespace-nowrap">
        Enquire on WhatsApp
      </span>
    </a>
  );
}
