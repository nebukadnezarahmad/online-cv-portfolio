import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { asset } from "@/lib/paths";
import FlowBackground from "@/components/FlowBackground";
import "./styles/base.css";
import "./styles/cinematic.css";
import "./styles/studio.css";

export const metadata: Metadata = {
  title: "Nebukadnezar Ahmad | CV & Portofolio",
  description:
    "CV dan portofolio Nebukadnezar Ahmad. Pengalaman, proyek website, desain, foto, dan video.",
  authors: [{ name: "Nebukadnezar Ahmad" }],
  icons: { icon: asset("assets/favicon.svg") },
};
export const viewport: Viewport = { themeColor: "#2b4f81" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body id="top" tabIndex={-1}>
        <FlowBackground />
        <noscript>
          <style>{`#main-nav.desktop-navigation{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;order:4}.menu-toggle{display:none!important}html{scroll-padding-top:220px}`}</style>
        </noscript>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
