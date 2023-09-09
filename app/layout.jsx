import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" flex flex-col items-center h-screen w-full bg-red-600 px-24 py-5">
        <Link href={"/"}>
          <h1 className="sm:text-6xl text-4xl font-tilt text-white mb-4">
            Pokedex App
          </h1>
        </Link>
        {children}
      </body>
    </html>
  );
}
