import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <h3 className="font-display text-3xl">Khan Carpets International</h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">
            Hand-knotted in Bhadohi, Uttar Pradesh — the carpet city of India.
            Exporting heirloom wool and silk rugs to homes, hotels and design
            studios across 30+ countries.
          </p>
          <div className="rule-gold mt-8 max-w-xs" />
          <p className="mt-6 text-[10px] tracking-luxe uppercase opacity-60">
            Est. 1974 · GoodWeave aligned · Export house
          </p>
        </div>

        <div>
          <h4 className="text-[10px] tracking-luxe uppercase opacity-60">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/collections" className="hover:text-accent">
                Collections
              </Link>
            </li>
            <li>
              <Link to="/craft" className="hover:text-accent">
                Our Craft
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Trade Enquiry
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-luxe uppercase opacity-60">
            Reach us
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="text-accent mt-0.5 h-4 w-4 shrink-0" />
              Bhadohi, Uttar Pradesh, India
            </li>
            <li className="flex gap-3">
              <Phone className="text-accent mt-0.5 h-4 w-4 shrink-0" />
              +91 98000 00000
            </li>
            <li className="flex gap-3">
              <Mail className="text-accent mt-0.5 h-4 w-4 shrink-0" />
              export@khancarpets.com
            </li>
            <li className="flex gap-3">
              <Instagram className="text-accent mt-0.5 h-4 w-4 shrink-0" />
              <a
                href="https://instagram.com/khan_carpets_international.kci"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                @khan_carpets_international.kci
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-[11px] opacity-50 lg:px-10">
          © {new Date().getFullYear()} Khan Carpets International. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
