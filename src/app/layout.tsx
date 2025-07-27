import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FutureTic - The Evolution of Tic-Tac-Toe",
  description: "Experience the future of gaming with our revolutionary Tic-Tac-Toe. Liquid glass aesthetics, quantum strategy, and neural AI in one immersive experience.",
  keywords: "tic-tac-toe, gaming, AI, quantum, futuristic, liquid glass, strategy, neural networks",
  authors: [{ name: "FutureTic Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
