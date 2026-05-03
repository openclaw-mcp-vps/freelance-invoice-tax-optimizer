import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoice Tax Optimizer – Auto-calculate optimal invoice timing",
  description: "Analyzes freelancer income patterns and suggests invoice timing to minimize quarterly tax burden while maintaining cash flow."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="90d62f85-6deb-453f-8327-cf0dd91a9050"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
