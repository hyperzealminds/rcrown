import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";
import { getCustomEnquiryUrl } from "../utils/whatsapp";

interface FormData {
  name: string;
  phone: string;
  whatsapp: string;
  course: string;
  batch: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  whatsapp?: string;
  course?: string;
  batch?: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    whatsapp: "",
    course: "Advanced Makeup & Beautician Course",
    batch: "Morning Batch",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Validate Indian Mobile Numbers (10 digits starting with 6-9)
  const validatePhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(cleanPhone);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for field when changed
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number (starts with 6-9)";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!validatePhone(formData.whatsapp)) {
      newErrors.whatsapp = "Enter a valid 10-digit Indian WhatsApp number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Version 1: Compile data and open WhatsApp API
      const whatsappUrl = getCustomEnquiryUrl({
        name: formData.name,
        phone: formData.phone,
        whatsapp: formData.whatsapp,
        course: formData.course,
        batch: formData.batch,
        message: formData.message
      });

      // Simulation of submission loading state
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        window.open(whatsappUrl, "_blank");
      }, 1000);

    } catch (err) {
      setIsSubmitting(false);
      setSubmitError("Failed to initiate enquiry. Please try again or call directly.");
    }
  };

  return (
    <div className="bg-white border border-brand-gold/15 p-6 md:p-10 shadow-md max-w-2xl mx-auto">
      {submitSuccess ? (
        <div className="text-center py-10 space-y-4">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
          <h3 className="text-2xl font-serif text-brand-black">Enquiry Initiated!</h3>
          <p className="text-sm text-brand-charcoal/80 max-w-md mx-auto">
            We are opening a WhatsApp chat window containing your formatted enquiry details. Please press send in WhatsApp to submit your admission request.
          </p>
          <button
            onClick={() => {
              setSubmitSuccess(false);
              setFormData({
                name: "",
                phone: "",
                whatsapp: "",
                course: "Advanced Makeup & Beautician Course",
                batch: "Morning Batch",
                message: ""
              });
            }}
            className="mt-6 px-6 py-2 bg-brand-charcoal text-white hover:bg-brand-black text-xs uppercase tracking-wider font-semibold transition"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-serif text-brand-black uppercase">ACADEMY &amp; STUDIO ENQUIRY</h3>
            <p className="text-xs text-brand-charcoal/70">
              Submit your info below to get batch schedules, fees, and syllabus details via WhatsApp.
            </p>
          </div>

          {submitError && (
            <div className="flex items-center space-x-2 p-4 bg-red-50 text-red-700 border border-red-200 text-sm">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full px-4 py-3 bg-brand-ivory/50 border text-sm text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-gold ${
                errors.name ? "border-red-500" : "border-brand-gold/15"
              }`}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                Mobile Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit phone number"
                className={`w-full px-4 py-3 bg-brand-ivory/50 border text-sm text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-gold ${
                  errors.phone ? "border-red-500" : "border-brand-gold/15"
                }`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            {/* WhatsApp Field */}
            <div>
              <label htmlFor="whatsapp" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="10-digit WhatsApp number"
                className={`w-full px-4 py-3 bg-brand-ivory/50 border text-sm text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-gold ${
                  errors.whatsapp ? "border-red-500" : "border-brand-gold/15"
                }`}
              />
              {errors.whatsapp && <p className="text-xs text-red-500 mt-1">{errors.whatsapp}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course Interest */}
            <div>
              <label htmlFor="course" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                Course or Service of Interest *
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-ivory/50 border border-brand-gold/15 text-sm text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-gold"
              >
                <option value="Advanced Makeup & Beautician Course">Advanced Makeup &amp; Beautician Course</option>
                <option value="Beautician Course">Beautician Course</option>
                <option value="Hair Course">Hair Course</option>
                <option value="Nail Course">Nail Course</option>
                <option value="Makeup Services">Makeup Services Enquiry</option>
                <option value="Other">Other Enquiry</option>
              </select>
            </div>

            {/* Preferred Batch */}
            <div>
              <label htmlFor="batch" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                Preferred Batch *
              </label>
              <select
                id="batch"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-ivory/50 border border-brand-gold/15 text-sm text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-gold"
              >
                <option value="Morning Batch">Morning (10:00 AM - 01:00 PM)</option>
                <option value="Afternoon Batch">Afternoon (02:00 PM - 05:00 PM)</option>
                <option value="Weekend Batch">Weekend (Saturday &amp; Sunday)</option>
                <option value="Flexible Batch">Flexible Timings</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
              Message or Specific Queries
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your background or requirements..."
              className="w-full px-4 py-3 bg-brand-ivory/50 border border-brand-gold/15 text-sm text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-gold resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center space-x-2 py-4 bg-brand-gold hover:bg-brand-goldDark disabled:bg-brand-gold/50 text-white font-semibold text-sm tracking-widest uppercase transition duration-300 shadow-md"
          >
            {isSubmitting ? (
              <span>Preparing Enquiry...</span>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Submit and Chat on WhatsApp</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
