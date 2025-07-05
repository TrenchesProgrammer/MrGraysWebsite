import type { Metadata } from "next";

// import "./globals.css";
import {MantineProvider} from "@mantine/core";
import { Graduate} from 'next/font/google';

const graduate = Graduate({ weight: '400', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: "Mr Gray's Tattoo studio, custom award winig tattoos, near Houston.",
  description: "Mr Gray's Tattoo studio, Houston, Texas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${graduate.className} `}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
