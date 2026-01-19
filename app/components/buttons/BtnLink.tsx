import Link from "next/link";
import { ReactNode } from "react";

interface TypeLink {
  link: string;
  title?: string;
  icon?: ReactNode;
  className: string;
  style? : React.CSSProperties;
}

export function BtnLink({ link, title, icon, className,style }: TypeLink) {
  return (
    <Link href={link} className={className} style={style}>
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{title}</span>
    </Link>
  );
}
