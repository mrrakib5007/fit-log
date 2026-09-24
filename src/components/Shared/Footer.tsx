import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black py-6">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={35}
            height={35}
            className="-rotate-45"
          />
          <span className="text-2xl font-oswald font-bold text-white uppercase tracking-wider">
            FitLog
          </span>
        </Link>
        <p className="text-gray-500 text-center lg:text-left text-sm">
          &copy; {new Date().getFullYear()} FitLog. Workout Library - Train hard, log honest.
        </p>
      </div>
    </footer>
  )
}

export default Footer