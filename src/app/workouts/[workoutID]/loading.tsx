const Loading = () => {
  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="aspect-square w-full rounded-xl border border-white/10 bg-[#161a23]" />

          <div className="flex flex-col justify-between">
            <div>
              <div className="h-10 w-3/4 rounded-lg bg-[#161a23] md:h-12" />

              <div className="mt-4 space-y-2">
                <div className="h-4 w-full rounded bg-[#161a23]" />
                <div className="h-4 w-5/6 rounded bg-[#161a23]" />
              </div>

              <div className="mt-5 flex gap-2.5">
                <div className="h-6 w-20 rounded-full bg-[#161a23]" />
                <div className="h-6 w-16 rounded-full bg-[#161a23]" />
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#161a23]">
                {Array.from({ length: 7 }).map((_, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between px-6 py-3.5 ${
                      index !== 6 ? "border-b border-white/5" : ""
                    }`}
                  >
                    <div className="h-4 w-24 rounded bg-white/10" />
                    <div className="h-4 w-20 rounded bg-white/10" />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="h-5 w-32 rounded bg-[#161a23]" />
                <div className="mt-4 space-y-3">
                  <div className="h-4 w-full rounded bg-[#161a23]" />
                  <div className="h-4 w-11/12 rounded bg-[#161a23]" />
                  <div className="h-4 w-4/5 rounded bg-[#161a23]" />
                  <div className="h-4 w-9/12 rounded bg-[#161a23]" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="h-12 w-48 rounded-xl bg-[#161a23]" />
              <div className="h-12 w-36 rounded-xl border border-white/10 bg-[#161a23]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;