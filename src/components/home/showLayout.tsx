"use client";

import { usePathname } from "next/navigation";

interface ShowLayoutProps {
  children: React.ReactNode;
}

export default function ShowLayout({ children }: ShowLayoutProps) {
  const pathname = usePathname();

  const isSpecialPage =
    pathname === "/sign-up" ||
    pathname === "/sign-in" ||
    pathname === "/forget-password" ||
    pathname === "/new-password";

  return !isSpecialPage ? children : null;
}
