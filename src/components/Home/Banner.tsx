import Image from "next/image";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 my-8">
      <div className="bg-[#12141a] border border-gray-800/80 rounded-2xl p-5 md:p-12 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 overflow-hidden">
        <div className="flex-1 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="text-(--primary) text-xs sm:text-sm font-semibold tracking-widest uppercase">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-oswald font-black text-white tracking-tight uppercase leading-[1.05]">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="pt-2 w-full flex justify-center lg:justify-start">
            <button className="bg-(--primary) text-black font-extrabold text-xs sm:text-sm tracking-wide uppercase py-3.5 px-6 rounded-md hover:brightness-110 active:scale-95 transition-all cursor-pointer">
              BROWSE WORKOUTS
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-105 lg:h-105">
            <Image
              src="/assets/banner.png"
              alt="Workout Machine"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;