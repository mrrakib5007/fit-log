import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center text-white">
      <div className="flex max-w-md flex-col items-center">
        <span className="font-oswald text-6xl font-extrabold tracking-wider text-(--primary) md:text-8xl">
          404
        </span>

        <h1 className="mt-3 font-oswald text-2xl font-bold uppercase tracking-wide md:text-3xl">
          Page Not Found
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-gray-400 md:text-base">
          The page you are looking for does not exist or has been
          removed.
        </p>

        <Link
          href="/"
          className="mt-8 flex items-center gap-2 rounded-xl bg-(--primary) px-6 py-3.5 text-sm font-bold text-black shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
        >
          <FiArrowLeft className="text-base stroke-[2.5]" />
          <span>Back to Workouts</span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
