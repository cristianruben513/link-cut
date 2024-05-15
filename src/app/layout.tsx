import Header from "@/components/layout/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ToasterComponent } from "@/components/providers/toaster";
import { cn } from "@/utils";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "@/styles/globals.css";

const interVariable = localFont({
  variable: "--font-sans",
  src: "../fonts/InterVariable.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const geistMonoVariable = localFont({
  variable: "--font-geist-mono",
  src: "../fonts/GeistMonoVF.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

// Metadata:
export const metadata: Metadata = {
  metadataBase: new URL("https://lcut.vercel.app/"),
  title: {
    default: "Link Cut - URL shortener",
    template: "%s - Link Cut",
  },
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/logo_png.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/images/apple-touch-icon.png",
    },
  ],
  description: "URL shortener",
  openGraph: {
    title: "Link Cut",
    description: "URL shortener",
    images: "https://lcut.vercel.app/images/og_image.png",
    url: "https://lcut.vercel.app",
    siteName: "Link Cut - URL shortener",
    locale: "en_US",
    type: "website",
  }
};

export const viewport: Viewport = {
  themeColor: "#171717",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `font-sans ${interVariable.variable} ${geistMonoVariable.variable} antialiased`,
          "bg-white dark:bg-neutral-900",
          "selection:bg-neutral-200 dark:selection:bg-neutral-700",
          "w-full"
        )}
      >
        <div className={cn(
          "fixed inset-0 -z-10 h-full w-full dark:bg-neutral-900 bg-neutral-100 bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-[size:60px_52px]  dark:bg-[linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)]"
        )}></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="max-w-5xl mx-auto">
            {children}
          </main>
          <ToasterComponent />
        </ThemeProvider>
      </body>
    </html>
  );
}
