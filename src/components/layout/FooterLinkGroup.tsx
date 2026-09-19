import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface FooterLinkGroupProps {
  links: FooterLink[];
}

export function FooterLinkGroup({ links }: FooterLinkGroupProps) {
  return (
    <div className="flex flex-col gap-2.5">
      {links.map((link) => (
        link.isExternal ? (
          <a 
            key={link.label}
            href={link.href} 
            className="text-slate-600 hover:text-[#00695C] hover:translate-x-1 transition-all text-sm w-fit"
          >
            {link.label}
          </a>
        ) : (
          <Link 
            key={link.label}
            to={link.href} 
            className="text-slate-600 hover:text-[#00695C] hover:translate-x-1 transition-all text-sm w-fit"
          >
            {link.label}
          </Link>
        )
      ))}
    </div>
  );
}
