import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import { Poppins } from "next/font/google";
// const graduate = Graduate({ weight: "400", subsets: ["latin"], display: "swap" });
const poppins = Poppins({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Mr Gray's Tattoo studio, custom award winig tattoos, near Houston.",
  description: "Mr Gray's Tattoo studio, Houston, Texas",
  viewport: "width=device-width, initial-scale=1", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
