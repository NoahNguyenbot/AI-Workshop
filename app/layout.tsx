import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noah Nguyen",
  description: "Noah Nguyen — Junior at UH Manoa studying Computer Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
