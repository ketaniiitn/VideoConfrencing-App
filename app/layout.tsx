import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import '@stream-io/video-react-sdk/dist/css/styles.css';
import "react-datepicker/dist/react-datepicker.css";

import { Toaster } from "@/components/ui/toaster"
//import { Toast, ToastProvider } from "@/components/ui/toast";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={{
        layout:{
          logoImageUrl: 'icons/yoom-logo.svg',
          socialButtonsVariant:'iconButton'
        },
        variables:{
          colorText:'#fff',
          colorPrimary:'#0E78F9',
          colorBackground:'#1C1F2E',
          colorInputBackground:'#252A41',
          colorInputText:'#FFF'
        }
      }}
      >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2` }
      >
        {children}
        <Toaster/>
      </body>
      </ClerkProvider>
    </html>
  );
}
