import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D9D9D4] bg-[#FBFAF7] mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* Column 1: Identity */}
          <div className="md:col-span-5 space-y-2">
            <p className="text-xs font-mono tracking-widest text-[#7C8288]">
              ENGINEERING PORTFOLIO
            </p>
            <h2 className="text-base font-semibold tracking-tight text-[#17191C]">
              {siteConfig.name}
            </h2>
            <p className="text-xs font-mono text-[#565B61]">
              {siteConfig.role} · {siteConfig.subRole}
            </p>
            <p className="text-xs text-[#7C8288] pt-2">
              Based in {siteConfig.location}, {siteConfig.country}.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-2.5">
            <p className="text-xs font-mono tracking-widest text-[#7C8288]">INDEX</p>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link
                  href="/work"
                  className="text-[#565B61] hover:text-[#17191C] transition-colors"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#565B61] hover:text-[#17191C] transition-colors"
                >
                  About & Background
                </Link>
              </li>
              <li>
                <Link
                  href="/#engineering"
                  className="text-[#565B61] hover:text-[#17191C] transition-colors"
                >
                  Engineering Notes
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#565B61] hover:text-[#17191C] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Coordinates */}
          <div className="md:col-span-4 space-y-2.5">
            <p className="text-xs font-mono tracking-widest text-[#7C8288]">
              COORDINATES
            </p>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#565B61] hover:text-[#174A7E] transition-colors group"
                >
                  <SocialIcon brand="github" size={15} />
                  <span>GitHub (@subhankar-das-phantom)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#565B61] hover:text-[#174A7E] transition-colors group"
                >
                  <SocialIcon brand="linkedin" size={15} />
                  <span>LinkedIn (subhankar-das)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.gmailCompose}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#565B61] hover:text-[#174A7E] transition-colors group"
                  title="Compose in Gmail"
                >
                  <SocialIcon brand="email" size={15} />
                  <span>{siteConfig.email}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li className="pt-1">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-1.5 text-[#174A7E] font-medium hover:underline transition-colors group"
                >
                  <span>Resume / Curriculum Vitae</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-[#D9D9D4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7C8288]">
          <p>© {currentYear} Subhankar Das. Designed with restraint and technical precision.</p>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <p className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
              <span>Systems Normal</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
