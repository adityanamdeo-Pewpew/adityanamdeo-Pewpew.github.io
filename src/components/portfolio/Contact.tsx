import { useState } from "react";
import emailjs from "@emailjs/browser";
// FIX: Github must have a lowercase 'h' in lucide-react
import {
  Github,
  LinkedinIcon,
  Instagram,
  Mail,
  Twitter,
} from "lucide-react";

const socials = [
  { Icon: Github, label: "GitHub", href: "https://github.com/adityanamdeo-Pewpew" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-namdeo-aa21b5368/" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com/" },
  { Icon: Twitter, label: "Twitter", href: "https://x.com/Aditya_Namdeo_" },
  { Icon: Mail, label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=anni.namdeo@gmail.com" },
];

export function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
  "idle" | "loading" | "success" | "error"
>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setStatus("loading");

try {
  await emailjs.send(
    "service_ul7906m",
    "template_oxh8c7i",
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    "7qHJGunVMO9mr05af"
  );

  setStatus("success");

  setFormData({
    name: "",
    email: "",
    message: "",
  });

  setTimeout(() => {
    setStatus("idle");
  }, 4000);
} catch (error) {
  console.error(error);

  setStatus("error");

  setTimeout(() => {
    setStatus("idle");
  }, 4000);
}
};

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-xs text-[var(--neon)] uppercase tracking-[0.3em] mb-6">
          [ SEC_05 // COMMUNICATION_PORT ]
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* LEFT — intro + endpoints */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="neon-text">INITIATE PING</span>
              <span className="font-mono text-sm text-muted-foreground ml-3">| [ CONTACT_ME ]</span>
            </h2>

            <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-md">
              Whether you have a startup idea, a freelance project, or an opportunity to collaborate, I'm always open to building something meaningful. Initiate a secure transmission.
            </p>

            <div className="terminal-window">
              <div className="terminal-bar">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--neon)]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyan)]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--purple)]/80" />
                <span className="ml-2 opacity-70">// secure_endpoints</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2">
                <div>
                  <span className="text-[var(--cyan)]">[MAIL]</span>{" "}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anni.namdeo@gmail.com" className="underline decoration-dotted underline-offset-4 hover:text-[var(--neon)] transition-colors">
                    [ DECRYPT_MAILTO ]
                  </a>
                </div>
                <div>
                  <span className="text-[var(--cyan)]">[LOC ]</span>{" "}
                  <span className="text-muted-foreground">Sagar, Madhya Pradesh, IN</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl border border-[var(--neon)]/30 p-5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon)]/10 via-transparent to-[var(--purple)]/20 pointer-events-none" />
              <div className="relative font-mono text-sm space-y-2">
                <div>
                  <span className="text-[var(--neon)] font-semibold animate-text-glow">STATUS:</span>{" "}
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--neon)] animate-status-dot" />
                    <span className="font-semibold">OPEN</span>
                  </span>
                </div>
                <div className="text-muted-foreground">
                  Available for web development, full-stack projects, and freelance opportunities.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="terminal-window">
            <div className="terminal-bar">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--neon)]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--cyan)]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--purple)]/80" />
              <span className="ml-2 opacity-70">~/ contact $ ./send_message.sh</span>
            </div>
            {/* Added proper onSubmit handler */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Added name, value, and onChange handlers */}
                <Field 
                  label="IDENTIFIER [NAME]" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="guest_user" 
                />
                <Field 
                  label="RETURN_ADDRESS [EMAIL]" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="user@node.com" 
                />
              </div>
              <div>
                <label className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">PAYLOAD [MESSAGE]</label>
                {/* Added name, value, and onChange handlers */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Transmit data..."
                  className="mt-2 w-full bg-background/60 dark:bg-background/40 border border-border focus:border-[var(--neon)] outline-none rounded-md p-3 text-sm font-mono resize-none transition-colors placeholder:text-muted-foreground/60"
                  required
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-md border border-[var(--neon)]/40 py-3 font-mono text-sm font-bold tracking-[0.2em] text-foreground hover:text-background transition-colors"
              >
                <span
                  className="absolute inset-0 opacity-30 group-hover:opacity-100 transition-opacity"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, var(--neon) 0 6px, transparent 6px 12px)",
                  }}
                />
                <span className="relative z-10">
                  {status === "idle" && "EXECUTE_TRANSMISSION ↗"}
                  {status === "loading" && "ESTABLISHING_CHANNEL..."}
                  {status === "success" && "PACKET_DELIVERED ✓"}
                  {status === "error" && "TRANSMISSION_FAILED ✕"}
                </span>
              </button>

              {/* Social icons below send button */}
              <div className="pt-4 border-t border-border">
                <div className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-3">
                  // alt_channels
                </div>
                <div className="flex flex-wrap gap-3">
                  {socials.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group relative grid place-items-center h-11 w-11 rounded-md border border-border hover:border-[var(--neon)] hover:text-[var(--neon)] transition-all hover:-translate-y-0.5"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[var(--neon)]">
                        {label.toLowerCase()}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Updated Field component interface to support state wiring
interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

function Field({ label, name, value, onChange, type = "text", placeholder }: FieldProps) {
  return (
    <div>
      <label className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full bg-background/60 dark:bg-background/40 border border-border focus:border-[var(--neon)] outline-none rounded-md px-3 py-2 text-sm font-mono transition-colors placeholder:text-muted-foreground/60"
        required
      />
    </div>
  );
}