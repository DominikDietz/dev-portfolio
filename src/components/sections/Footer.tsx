import AstroIcon from "@/assets/icons/astro";
import GithubIcon from "@/assets/icons/github";
import LinkedinIcon from "@/assets/icons/linkedin";
import NetlifyIcon from "@/assets/icons/netlify";
import TailwindIcon from "@/assets/icons/tailwindcss";
import { MailIcon } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/DominikDietz",
    icon: <GithubIcon />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/dominik-dietz-3006a0218/",
    icon: <LinkedinIcon />,
    label: "LinkedIn",
  },
  {
    href: "mailto:contact@dominikdietz.dev",
    icon: <MailIcon />,
    label: "Email",
  },
];

const buildTools = [
  {
    desc: "Built with Astro",
    icon: <AstroIcon />,
  },
  {
    desc: "Styled with TailwindCSS",
    icon: <TailwindIcon />,
  },
  {
    desc: "Deployed on Netflify",
    icon: <NetlifyIcon />,
  },
];

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto flex flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center lg:px-8">
        <div className="flex flex-col gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {buildTools.map((tech) => (
            <span key={tech.desc} className="flex items-center gap-2">
              {tech.desc} {tech.icon}
            </span>
          ))}
        </div>

        <div className="text-sm">
          <span>Copyright © 2025 Dominik Dietz. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
