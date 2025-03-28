import Preloader from "@/layouts/Preloader";
import "@css/animate.css";
import "@css/glitche-basic.css";
import "@css/glitche-layout.css";
import "@css/ionicons.css";
import "@css/magnific-popup.css";
import "@css/template-colors/orange.css";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import State from "/context/context";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});
export const metadata = {
  title: "JehadurRE - Software Engineer",
  description: "JehadurRe | Software Engineer – Passionate about building scalable, high-performance applications. Experienced in Next.js, Laravel, ASP.NET, Flutter, and AI/ML. Explore my projects and research.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.variable}>
        {/* Preloader */}
        <Preloader />
        <State>{children} </State>
      </body>
    </html>
  );
}
