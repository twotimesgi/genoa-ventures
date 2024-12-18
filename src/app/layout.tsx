import type { Metadata } from "next";
import { Roboto, Space_Grotesk } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--roboto",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--spaceGrotesk",
});
import "./globals.css";
import { Header } from "@/components/header";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Genoa Ventures",
  description: "Selecting, training, and promoting european talents to turn their ideas into real start up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.style} ${spaceGrotesk.variable} antialiased`}>
        <main>
          <Toaster />
          <Header />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
