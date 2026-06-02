"use client";

import { useState } from "react";
import { Mail, MapPin, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

// Regex patterns for validation
const PATTERNS = {
  name: /^[a-zA-Z\s]{2,}$/,
  email: /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/,
  message: /.{10,}/,
};

export function ContactSection() {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    // Validate form data with regex
    if (!PATTERNS.name.test(formData.name)) {
      toast.error(t("validationErrors.invalidName"));
      return;
    }
    if (!PATTERNS.email.test(formData.email)) {
      toast.error(t("validationErrors.invalidEmail"));
      return;
    }
    if (!PATTERNS.message.test(formData.message)) {
      toast.error(t("validationErrors.invalidMessage"));
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || t("validationErrors.sendError"));
      }

      toast.success(t("successMessage"));
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : t("validationErrors.generalError"),
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              {t("sectionLabel")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              {t("heading")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("description")}
            </p>
          </div> */}
          <div className="mb-10 max-w-3xl text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              {t("sectionLabel")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("heading")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("email")}
                  </h3>
                  <Link
                    href="mailto:nicolaischirmer22@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t("emailAddress")}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {t("location")}
                  </h3>
                  <p className="text-muted-foreground">{t("locationText")}</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold text-foreground mb-4">
                  {t("followMe")}
                </h3>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/NicNickca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                    aria-label={t("githubAriaLabel")}
                  >
                    <FaGithub className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/nicolai-marlon-schirmer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                    aria-label={t("linkedinAriaLabel")}
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={t("namePlaceholder")}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t("emailPlaceholder")}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder={t("messagePlaceholder")}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {t("sendingButton")}
                    </>
                  ) : (
                    t("sendButton")
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
