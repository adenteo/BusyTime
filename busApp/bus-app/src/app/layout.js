import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import * as dotenv from "dotenv";
dotenv.config({ path: "./env" });

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "BUSyTime",
  description: "A web application for users to search for bus timings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true} className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
