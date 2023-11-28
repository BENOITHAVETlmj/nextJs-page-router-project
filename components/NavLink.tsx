'use client';


import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    children: React.ReactNode;
    href: string;
    prefetch: boolean
}

export default function NavLink({ children, href, prefetch }: NavLinkProps) {
const pathname = usePathname();

if(pathname === href) {
    return (
       <span className="opacity-30 text-orange-800">
         {children}
       </span> 
    )
}

    return (
        <Link className="text-orange-800 hover:underline" href={href} prefetch={prefetch}>
          {children}
        </Link>
    )
}