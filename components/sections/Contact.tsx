"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  classApplying: string;
  message: string;
};

// ── Sanitise: strip HTML tags to prevent XSS in email body ──
function sanitise(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

// ── Client-side rate limit: max 3 submissions per 5 minutes ──
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 5 * 60 * 1000;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "rate-limited">("idle");

  const submissionTimestamps = useRef<number[]>([]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // ── Rate-limit check ──
    const now = Date.now();
    submissionTimestamps.current = submissionTimestamps.current.filter(
      (t) => now - t < RATE_WINDOW_MS
    );
    if (submissionTimestamps.current.length >= RATE_LIMIT) {
      setSubmitStatus("rate-limited");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: sanitise(data.fullName),
          from_email: sanitise(data.email),
          phone: sanitise(data.phone),
          class_applying: sanitise(data.classApplying),
          message: sanitise(data.message),
          to_email: "rileadingschool@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );

      submissionTimestamps.current.push(Date.now());
      setSubmitStatus("success");
      reset();
    } catch {
      // Do NOT log the full error — it may contain credentials or PII
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-24 lg:py-32 bg-sand relative border-b border-gold/20">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-medium uppercase tracking-widest text-sm">Get In Touch</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
            Location & Contact
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left: Map & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 flex flex-col space-y-8"
          >
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gold/30">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.975497262624!2d75.67484437452684!3d11.660613242080344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65da309a4f89d%3A0xc3c544e99f6b9c9f!2sRahmaniyya%20International%20Leading%20School!5e0!3m2!1sen!2sin!4v1714395000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(30%) contrast(1.1) brightness(1.1)" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="RILS Location Map"
              ></iframe>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-sand-dark/10 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Contact Information</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-primary mb-1">Campus Address</h4>
                  <p className="text-primary/70">Rahmaniyya International Leading School<br/>Katameri PO, Vatakara<br/>Kozhikode District, Kerala 673503</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-gold shrink-0" />
                <div>
                  <h4 className="font-medium text-primary mb-1">Phone</h4>
                  <p className="text-primary/70">+91 9605270250</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-gold shrink-0" />
                <div>
                  <h4 className="font-medium text-primary mb-1">Email</h4>
                  <p className="text-primary/70">rileadingschool@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gold/20 h-full relative overflow-hidden">
               {/* Pattern */}
               <div className="bg-pattern-islamic absolute inset-0 opacity-5 pointer-events-none" />
               
               <h3 className="font-serif text-3xl font-bold text-primary mb-8 relative z-10">Send an Enquiry</h3>
               
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                 
                 <div className="space-y-1">
                   <label className="text-sm font-medium text-primary/80">Full Name *</label>
                   <input 
                     {...register("fullName", { required: "Full name is required" })}
                     type="text" 
                     suppressHydrationWarning
                     className="w-full px-4 py-3 bg-bg-light border border-sand-dark/30 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                     placeholder="Enter your name"
                   />
                   {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-1">
                     <label className="text-sm font-medium text-primary/80">Phone Number *</label>
                     <input 
                       {...register("phone", { required: "Phone number is required" })}
                       type="tel" 
                       suppressHydrationWarning
                       className="w-full px-4 py-3 bg-bg-light border border-sand-dark/30 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                       placeholder="+91 xxxxx xxxxx"
                     />
                     {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                   </div>
                   
                   <div className="space-y-1">
                     <label className="text-sm font-medium text-primary/80">Email Address (Optional)</label>
                     <input 
                       {...register("email", { 
                         pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "Invalid email address"
                         }
                       })}
                       type="email" 
                       suppressHydrationWarning
                       className="w-full px-4 py-3 bg-bg-light border border-sand-dark/30 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                       placeholder="you@example.com"
                     />
                     {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                   </div>
                 </div>

                 <div className="space-y-1">
                   <label className="text-sm font-medium text-primary/80">Class Applying For *</label>
                   <select 
                     {...register("classApplying", { required: "Please select a class" })}
                     suppressHydrationWarning
                     className="w-full px-4 py-3 bg-bg-light border border-sand-dark/30 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
                   >
                     <option value="">Select a class...</option>
                     <option value="8">Class 8</option>
                     <option value="9">Class 9</option>
                     <option value="10">Class 10</option>
                     <option value="+1">Plus One (+1)</option>
                   </select>
                   {errors.classApplying && <p className="text-red-500 text-xs mt-1">{errors.classApplying.message}</p>}
                 </div>

                 <div className="space-y-1">
                   <label className="text-sm font-medium text-primary/80">Message / Enquiry Details</label>
                   <textarea 
                     {...register("message")}
                     rows={4}
                     className="w-full px-4 py-3 bg-bg-light border border-sand-dark/30 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                     placeholder="How can we help you?"
                   ></textarea>
                 </div>

                 <button 
                  type="submit" 
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="w-full bg-primary hover:bg-[#093a2c] text-white py-4 rounded-lg font-medium transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {isSubmitting ? (
                     <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                     </>
                   ) : (
                     <>
                      <Send className="w-5 h-5" />
                      Submit Enquiry
                     </>
                   )}
                 </button>

                  {submitStatus === "success" && (
                    <div role="alert" className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm text-center">
                      Thank you! Your enquiry has been sent successfully. We will get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div role="alert" className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm text-center">
                      Something went wrong. Please try again or contact us directly via WhatsApp.
                    </div>
                  )}
                  {submitStatus === "rate-limited" && (
                    <div role="alert" className="p-4 bg-amber-50 border border-amber-200 text-amber-700 rounded-lg text-sm text-center">
                      Too many submissions. Please wait a few minutes before trying again.
                    </div>
                  )}

               </form>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
