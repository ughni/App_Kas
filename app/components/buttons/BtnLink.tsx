import Link from "next/link";
import { ReactNode } from "react";

interface TypeLink {
  link: string;
  title?: string;
  icon?: ReactNode;
  className: string;
}

export function BtnLink({ link, title, icon, className }: TypeLink) {
  return (
    <Link href={link} className={className}>
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{title}</span>
    </Link>
  );
}
