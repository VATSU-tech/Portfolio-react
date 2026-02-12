import { socialLinks } from "../../data/content";

const SiteFooter = () => (
  <footer className="section-pad pt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-ink-muted">
    <span>© 2026 Vatsu Studio. Tous droits réservés.</span>
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a key={link.label} className="hover:text-ink" href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  </footer>
);

export default SiteFooter;
