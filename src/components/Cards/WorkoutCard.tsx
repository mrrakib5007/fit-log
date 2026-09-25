import Image from "next/image";
import { FiClock, FiStar } from "react-icons/fi";
import { IWorkout } from "@/Type/workout";
import Link from "next/link";
import { TbFlameFilled } from "react-icons/tb";

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  const { id, image, name, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;

  return (
    <Link
      href={`/workouts/${id}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15171c] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {muscleGroups.map((muscle, index) => (
            <span
              key={`${muscle}-${index}`}
              className="rounded-full bg-(--primary) px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="mb-1 text-xl font-extrabold uppercase tracking-wide text-white">
          {name}
        </h2>

        <p className="text-sm text-gray-400">{equipment}</p>

        <div className="my-4 h-px bg-white/10" />

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <FiClock />
            <span>{duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <TbFlameFilled />
            <span>{caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <FiStar />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
