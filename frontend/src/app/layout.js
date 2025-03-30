import { Nunito as Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jacob Fu",
  description: "Jacob's Personal Website",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
