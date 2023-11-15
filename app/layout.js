import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ThemeRegistry from "./themeRegistry";
import { ToastContainer } from "react-toastify";
import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import DrawerHeader from "@/components/DrawerHeader";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s - Rhandy",
    default: "Rhandyta Briantama",
  },
  generator: "Next.js",
  applicationName: "Portofolio Rhandyta Briantama",
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOST),
  referrer: "origin-when-cross-origin",

  authors: [
    { name: "Rhandyta Briantama", url: process.env.NEXT_PUBLIC_HOST },
    { name: "Rhandyta", url: process.env.NEXT_PUBLIC_HOST },
    { name: "Rhandy", url: process.env.NEXT_PUBLIC_HOST },
    { name: "Briantama", url: process.env.NEXT_PUBLIC_HOST },
  ],
  creator: "Rhandyta Briantama",
  publisher: "Rhandyta Briantama",

  other: {
    "site-name": "Portfolio Rhandyta Briantama",
    locale: "id-ID",
    "geo.region": "ID-JK",
    "geo.placename": "Jakarta",
    language: "id-ID",
    distribution: "global",
    rating: "general",
    "allow-search": "yes",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  appLinks: {
    web: {
      url: process.env.NEXT_PUBLIC_HOST,
      should_fallback: true,
    },
  },

  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
  
  archives: [`${process.env.NEXT_PUBLIC_HOST}/works`],
  bookmarks: [`${process.env.NEXT_PUBLIC_HOST}/guestbook`],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <ThemeRegistry options={{ key: "mui" }}>
          <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: {
                  xs: 1,
                  md: 3,
                },
              }}
            >
              <DrawerHeader />
              {children}
              <Footer />
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
