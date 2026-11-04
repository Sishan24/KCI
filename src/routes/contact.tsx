import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Trade & Custom Enquiry | Khan Carpets International" },
      {
        name: "description",
        content:
          "Request a quotation, a custom rug or a showroom visit with Khan Carpets International in Bhadohi, India. Design desk replies within 48 hours.",
      },
      {
        property: "og:title",
        content: "Trade & Custom Enquiry | Khan Carpets International",
      },
      {
        property: "og:description",
        content:
          "Send KCI your size, palette or drawing — we reply with a CAD render and quotation within 48 hours.",
      },
    ],
  }),
  component: Contact,
});

const interests = [
  "Heritage",
  "Botanical",
  "Contemporary",
  "Silk",
  "Fully bespoke",
];

const empty = {
  name: "",
  email: "",
  country: "",
  interest: "Heritage",
  size: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);

  const set = (k: keyof typeof empty) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please add your name, email and a short message.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    toast.success(
      `Thank you, ${form.name.split(" ")[0]} — our design desk will reply within 48 hours.`,
    );
    setForm(empty);
  };

  const field =
    "w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-accent";
  const labelCls = "text-[10px] tracking-luxe uppercase text-muted-foreground";

  return (
    <>
      <section className="bg-primary text-primary-foreground pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-accent text-[11px] tracking-luxe uppercase">
            Contact
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-tight lg:text-7xl">
            Let's talk about your floor
          </h1>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-10">
          <form onSubmit={submit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className={labelCls}>Name *</span>
                <input
                  className={`${field} mt-2`}
                  value={form.name}
                  onChange={(e) => set("name")(e.target.value)}
                  placeholder="Your full name"
                />
              </label>
              <label className="block">
                <span className={labelCls}>Email *</span>
                <input
                  type="email"
                  className={`${field} mt-2`}
                  value={form.email}
                  onChange={(e) => set("email")(e.target.value)}
                  placeholder="you@studio.com"
                />
              </label>
              <label className="block">
                <span className={labelCls}>Country</span>
                <input
                  className={`${field} mt-2`}
                  value={form.country}
                  onChange={(e) => set("country")(e.target.value)}
                  placeholder="Shipping destination"
                />
              </label>
              <label className="block">
                <span className={labelCls}>Approx. size</span>
                <input
                  className={`${field} mt-2`}
                  value={form.size}
                  onChange={(e) => set("size")(e.target.value)}
                  placeholder="e.g. 9' x 12' / 275 x 365 cm"
                />
              </label>
            </div>

            <div>
              <span className={labelCls}>Interested in</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => set("interest")(i)}
                    className={`border px-5 py-2 text-[11px] tracking-luxe uppercase transition-colors ${
                      form.interest === i
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>

            <label className="block">
              <span className={labelCls}>Your brief *</span>
              <textarea
                rows={6}
                className={`${field} mt-2 resize-none`}
                value={form.message}
                onChange={(e) => set("message")(e.target.value)}
                placeholder="Room, palette, deadline, quantity — anything helps."
              />
            </label>

            <button
              type="submit"
              disabled={sending}
              className="bg-primary text-primary-foreground inline-flex items-center gap-3 px-10 py-4 text-xs tracking-luxe uppercase transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send enquiry"}
              <Send className="h-4 w-4" />
            </button>
          </form>

          <aside className="texture-weave border-border h-fit border p-8">
            <h2 className="font-display text-3xl">Khan Carpets International</h2>
            <div className="rule-gold my-6" />
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-accent mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Carpet City Road, Bhadohi
                  <br />
                  Uttar Pradesh 221401, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-accent mt-0.5 h-4 w-4 shrink-0" />
                +91 98000 00000
              </li>
              <li className="flex gap-3">
                <Mail className="text-accent mt-0.5 h-4 w-4 shrink-0" />
                export@khancarpets.com
              </li>
            </ul>
            <div className="rule-gold my-6" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Workshop visits: Monday–Saturday, 9am–6pm IST. Varanasi airport
              pickup arranged on request.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
