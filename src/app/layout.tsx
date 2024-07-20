"use client";
import '@rainbow-me/rainbowkit/styles.css';

import {RainbowKitProvider} from '@rainbow-me/rainbowkit';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient()


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
        <body className={inter.className}>{children}</body>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </html>
  );
}
