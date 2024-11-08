"use client";

import { usePathname } from "next/navigation";

export default function ShowLayout({ children }: any) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/sign-up" ;
  const isRegisterPage = pathname === "/sign-in" ;
  const isForgetPage = pathname === "/forget-password" ;
  const isNewPasswordPage = pathname === "/new-password" ;

  return !(isLoginPage || isRegisterPage || isForgetPage || isNewPasswordPage) ? children : null;
}