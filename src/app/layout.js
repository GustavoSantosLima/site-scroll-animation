import { Barlow_Condensed, Quicksand } from "next/font/google";
import Menu from "./components/Menu";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-quicksand"
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "500"
});

export const metadata = {
  title: "Scroll Snap Layout",
  description: "A simple example of a scroll snap layout"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${barlow.className} ${quicksand.variable}`}>
        <Menu />

        {children}
      </body>
    </html>
  );
}
