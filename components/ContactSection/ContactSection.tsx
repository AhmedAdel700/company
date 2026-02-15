"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { z } from "zod";

// Update phone validation in the schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .transform((val) => val.replace(/\s/g, "")),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

  const ErrorWrapper = ({ error }: { error?: string }) => (
    <div className="min-h-[24px] mt-1">
      {error && (
        <p className="text-sm text-red-500 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );

export default function ContactSection() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const performValidation = (name: string, value: string) => {
    try {
      // Create a transient schema for just this field to handle transforms/refines correctly
      const fieldSchema = z.object({
        [name]:
          contactFormSchema.shape[name as keyof typeof contactFormSchema.shape],
      });
      const result = fieldSchema.safeParse({ [name]: value });

      if (!result.success) {
        const message = result.error.issues[0].message;
        setErrors((prev) => ({ ...prev, [name]: message }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    } catch (e) {
      // Fallback or ignore if field doesn't exist in schema
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing if it was already resolved
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    performValidation(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus("idle");

    // Validate all fields with Zod
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Log data to console instead of making API call
    console.log("Form submitted successfully:", formData);

    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@company.com",
      href: "mailto:contact@company.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+20 123 456 7890",
      href: "tel:+201234567890",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Real Estate St., New Cairo, Egypt",
      href: "#",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          {/* Left Side: Header + Info */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-[var(--color-secondary)]" />
                <span
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {t("Badge")}
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-3">
                {t("Title")}
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                {t("Description")}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                    style={{
                      backgroundColor: "var(--color-background-alt)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{
                          backgroundColor: "var(--color-primary)",
                          color: "var(--color-secondary)",
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-lg text-[var(--color-text-primary)]">
                          {info.title}
                        </h3>
                        <a
                          href={info.href}
                          className="transition-colors text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)]"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-3">
            <div
              className="p-8 rounded-2xl border shadow-xl h-full"
              style={{
                backgroundColor: "var(--color-background-alt)",
                borderColor: "var(--border-color)",
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-4 flex flex-col h-full"
              >
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]"
                  >
                    {t("FullName")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-all"
                    style={{
                      backgroundColor: "var(--color-background)",
                      borderColor: errors.name
                        ? "#ef4444"
                        : "var(--border-color)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="John Doe"
                    autoComplete="name"
                  />
                  <ErrorWrapper error={errors.name} />
                </div>

                {/* Email and Phone Grid */}
                <div className="grid md:grid-cols-2 gap-x-6">
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]"
                    >
                      {t("Email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-all"
                      style={{
                        backgroundColor: "var(--color-background)",
                        borderColor: errors.email
                          ? "#ef4444"
                          : "var(--border-color)",
                        color: "var(--color-text-primary)",
                      }}
                      placeholder="john@example.com"
                      autoComplete="email"
                    />
                    <ErrorWrapper error={errors.email} />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]"
                    >
                      {t("Phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-all"
                      style={{
                        backgroundColor: "var(--color-background)",
                        borderColor: errors.phone
                          ? "#ef4444"
                          : "var(--border-color)",
                        color: "var(--color-text-primary)",
                      }}
                      placeholder="+20 123 456 7890"
                      autoComplete="tel"
                    />
                    <ErrorWrapper error={errors.phone} />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex-1 flex flex-col min-h-0">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-[var(--color-text-primary)]"
                  >
                    {t("Message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-all resize-none flex-1 min-h-[150px]"
                    style={{
                      backgroundColor: "var(--color-background)",
                      borderColor: errors.message
                        ? "#ef4444"
                        : "var(--border-color)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="Tell us more about your inquiry..."
                  />
                  <ErrorWrapper error={errors.message} />
                </div>

                {/* Submit Button Area */}
                <div className="mt-auto pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "var(--color-secondary)",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t("Sending")}
                      </>
                    ) : (
                      <>
                        {t("Send")}
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {/* Success/Error Status Messages */}
                  <div className="min-h-[64px] flex flex-col justify-center">
                    {submitStatus === "success" && (
                      <div
                        className="p-4 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2"
                        style={{ backgroundColor: "#10b981", color: "white" }}
                      >
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm font-medium">{t("Success")}</p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div
                        className="p-4 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2"
                        style={{ backgroundColor: "#ef4444", color: "white" }}
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm font-medium">{t("Error")}</p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
