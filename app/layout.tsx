import { Suspense } from "react";
import Header from "@/components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
// import { Inter, Space_Mono, Roboto } from "next/font/google";
import "./styles/globals.scss";
import Loading from "./loading";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

// const space_Mono = Space_Mono({
//   subsets: ["latin"],
//   variable: "--font-space-Mono",
//   display: "swap",
//   weight: "400",
// });

// const roboto = Roboto({
//   variable: "--font-ubuntu",
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata = {
  icons: {
    icon: { url: "/images/favicon.png", type: "image/png" },
    shortcut: { url: "/images/favicon.png", type: "image/png" },
  },

  title: "RecAman",
  description:
    "chat-bot,recommender system,implicit opinion mining,knowledge garph",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
