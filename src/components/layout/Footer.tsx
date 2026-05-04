import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-dark)" }} className="text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="Blue Bay Mobility" width={44} height={44} className="rounded-full" />
              <div>
                <div className="font-black text-lg">Blue Bay Mobility</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">Inc.</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              The right mobility equipment, matched to you. U.S. arm of Medics Mobility Inc., est. 2003.
            </p>
            <div className="space-y-2.5">
              <a href="tel:18889990072" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Phone size={14} className="flex-shrink-0" />
                1-888-999-0072
              </a>
              <a href="mailto:info@bluebaymobility.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Mail size={14} className="flex-shrink-0" />
                info@bluebaymobility.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>3002 Dow Ave Unit 312<br />Tustin, CA 92780</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Clock size={14} className="flex-shrink-0" />
                Mon–Fri, 9am–5pm Pacific
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Products</h4>
            <ul className="space-y-2.5">
              {[
                ["Power Wheelchairs", "/products?category=power-wheelchairs"],
                ["Manual Wheelchairs", "/products?category=manual-wheelchairs"],
                ["Seating & Positioning", "/products?category=seating-positioning"],
                ["Power Scooters", "/products?category=power-scooters"],
                ["Walkers & Rollators", "/products?category=walkers-rollators"],
                ["Transfer Aids", "/products?category=transfer-aids"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Help */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Who We Help</h4>
            <ul className="space-y-2.5">
              {[
                ["Patients & Users", "/who-we-help#patients"],
                ["Caregivers & Families", "/who-we-help#caregivers"],
                ["OTs & Clinicians", "/who-we-help#clinicians"],
                ["How It Works", "/how-it-works"],
                ["Book Consultation", "/consultation"],
                ["Track Order", "/tracking"],
                ["About Us", "/about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Insurance Partners</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {["Medicare Part B", "Medicaid", "Medicare Advantage", "Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Humana"].map((ins) => (
                <li key={ins}>{ins}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Blue Bay Mobility Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            The U.S. arm of Medics Mobility Inc. · Ontario, Canada, Est. 2003
          </p>
        </div>
      </div>
    </footer>
  );
}
