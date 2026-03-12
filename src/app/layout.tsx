import type { Metadata } from "next";
import "./globals.css";
import TopMenu from "@/components/TopMenu";

export const metadata: Metadata = {
  title: "Venue Explorer",
  description: "Venue Explorer App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.NODE_ENV === "test") {
    return (
      <>
        <TopMenu />
        {children}
      </>
    );
  }

  return (
    <html lang="en">
      <body>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}