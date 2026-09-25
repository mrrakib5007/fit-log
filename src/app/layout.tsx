import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import WorkoutProvider from "@/context/WorkoutContext";
import { Slide, ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITLOG",
  description:
    "A fitness tracking app to help you stay on top of your workouts and progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <WorkoutProvider>
          <ToastContainer 
              position="top-right" 
              autoClose={2500} 
              theme="dark"
              draggable={false}              
              transition={Slide}
               />
          <Navbar />
          {children}
          <Footer />
        </WorkoutProvider>
      </body>
    </html>
  );
}
