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
    template: "%s | Rhandy",
    default: "Rhandyta Briantama",
  },
  generator: "Next.js",
  applicationName: "Portofolio Rhandyta Briantama",
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOST),
  referrer: "origin-when-cross-origin",

  authors: [
    { name: "Rhandyta Briantama", url: "https://rhandyta.my.id" },
    { name: "Rhandyta", url: "https://rhandyta.my.id" },
    { name: "Rhandy", url: "https://rhandyta.my.id" },
    { name: "Briantama", url: "https://rhandyta.my.id" },
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

  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
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
