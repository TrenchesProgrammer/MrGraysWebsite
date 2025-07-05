import type { Metadata } from "next";

import "./globals.css";
import {MantineProvider} from "@mantine/core";
import { Graduate, Archivo_Black} from 'next/font/google';

const graduate = Graduate({ weight: '400', subsets: ['latin'], display: 'swap' });
const archivoBlack = Archivo_Black({ weight: '400', subsets: ['latin'], display: 'swap' });
// const asapCondensed = Asap_Condensed({ weight: '400', subsets: ['latin'], display: 'swap' });
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
