import "./globals.css";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Exchange Currencies",
  description: "Exchange IRR to USD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoSerif.className}>
      <body>{children}</body>
    </html>
  );
}
