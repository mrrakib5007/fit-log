import Image from "next/image";
import { notFound } from "next/navigation";
import { IWorkout } from "@/Type/workout";
import WorkoutButtons from "@/components/Workout/WorkoutButtons";

interface DetailsPageProps {
  params: Promise<{ workoutID: string }>;
}

const WorkoutDetailsPage = async ({ params }: DetailsPageProps) => {
  const { workoutID } = await params;
  let workout: IWorkout | null = null;

  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${workoutID}`);
    if (!res.ok) notFound();
    const data = await res.json();
    if (data?.error) notFound();
    workout = data;
  } catch {
    notFound();
  }

  if (!workout) notFound();

  const { name, image, muscleGroups, equipment, difficulty, duration, caloriesBurned, sets, reps, rating, description, instructions } = workout;

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl">
            <Image src={image} alt={name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-oswald text-3xl font-extrabold uppercase tracking-wide md:text-5xl">{name}</h1>
              <p className="mt-3 text-sm leading-relaxed text-gray-400 md:text-base">{description}</p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {muscleGroups.map((muscle, index) => (
                  <span key={`${muscle}-${index}`} className="rounded-full bg-(--primary) px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                    {muscle}
                  </span>
                ))}
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#161a23]">
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-3.5 text-xs font-medium tracking-wide sm:text-sm">
                  <span className="font-semibold text-gray-400">EQUIPMENT</span>
                  <span className="font-semibold text-gray-200">{equipment}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-3.5 text-xs font-medium tracking-wide sm:text-sm">
                  <span className="font-semibold text-gray-400">DIFFICULTY</span>
                  <span className="font-semibold text-gray-200">{difficulty}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-3.5 text-xs font-medium tracking-wide sm:text-sm">
                  <span className="font-semibold text-gray-400">SETS</span>
                  <span className="font-semibold text-gray-200">{sets}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-3.5 text-xs font-medium tracking-wide sm:text-sm">
                  <span className="font-semibold text-gray-400">REPS</span>
                  <span className="font-semibold text-gray-200">{reps}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-3.5 text-xs font-medium tracking-wide sm:text-sm">
                  <span className="font-semibold text-gray-400">DURATION</span>
                  <span className="font-semibold text-gray-200">{duration} min</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-3.5 text-xs font-medium tracking-wide sm:text-sm">
                  <span className="font-semibold text-gray-400">CALORIES</span>
                  <span className="font-semibold text-gray-200">{caloriesBurned} kcal</span>
                </div>
                <div className="flex items-center justify-between px-6 py-3.5 text-xs font-medium tracking-wide sm:text-sm">
                  <span className="font-semibold text-gray-400">RATING</span>
                  <span className="font-semibold text-gray-200">{rating}</span>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-base font-bold uppercase tracking-wider text-white">INSTRUCTIONS</h2>
                <ol className="mt-3 space-y-1 text-sm leading-relaxed text-gray-400">
                  {instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="font-medium text-gray-400">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <WorkoutButtons workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;