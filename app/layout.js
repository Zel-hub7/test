import localFont from "next/font/local";
import "./globals.css";

// Importing custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Root Layout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://rippleeffectfree.com/wp-content/uploads/2024/04/eed6d48cf5f668ec493de6e054b112bd_1200_80.png')] bg-cover bg-center" />

        {/* Overlay with gradient from top left to bottom right */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#162C4E] via-blue-900 to-[#fd7e14] opacity-80" />


        <div className="relative z-10">{children}</div>
        {/* Main content */}
      </body>
    </html>
  );
}
