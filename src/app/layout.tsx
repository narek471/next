import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import HeaderQuiz from "./ui/HeaderQuiz";
import ProviderStore from "./ui/ProviderStore";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creating Sexual Wellness Plan",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "./favicon-32x32.png", type: "image/png" },
    ],
    apple: [{ url: "./apple-icon.png" }],
  },
  description:
    "Improve men`s health in 5 min/day.Feel confident & happy with the most downloaded intimate wellness app in the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable}  antialiased`}>
        <HeaderQuiz />

        <ProviderStore>{children}</ProviderStore>
        <div id="modal"></div>
      </body>
    </html>
  );
}
