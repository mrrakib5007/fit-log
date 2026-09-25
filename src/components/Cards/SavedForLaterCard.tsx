import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar, FiX } from "react-icons/fi";
import { TbFlameFilled } from "react-icons/tb";
import { IWorkout } from "@/Type/workout";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import { toast } from "react-toastify";

interface SavedForLaterCardProps {
  workout: IWorkout;  
}

const SavedForLaterCard = ({ workout }: SavedForLaterCardProps) => {
  const context = useContext(WorkoutContext);
  const { id, image, name, equipment, duration, caloriesBurned, rating } =
    workout;

  const handleRemove = () => {
    if (context) {
      context.setSaveForLater((prev) => prev.filter((item) => item.id !== id));
    }    
    toast.success(`Removed "${name}" from Save for Later.`);
  };

  return (
    <div className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#161a23] p-3 transition-all duration-300 hover:border-white/20 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4">
      <div className="flex items-start gap-3 sm:items-center sm:gap-4">
        <div className="relative aspect-video h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-white/10 sm:h-20 sm:w-32 sm:rounded-xl">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 96px, 128px"
            className="object-cover"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col pr-6 sm:pr-0">
          <h3 className="truncate font-oswald text-base font-extrabold uppercase tracking-wide text-white sm:text-lg">
            {name}
          </h3>
          <p className="truncate text-xs text-gray-400">{equipment}</p>

          <div className="mt-1.5 flex flex-wrap items-center gap-2.5 text-xs text-gray-400 sm:mt-2 sm:gap-3">
            <div className="flex items-center gap-1">
              <FiClock className="text-gray-400" />
              <span>{duration} min</span>
            </div>

            <div className="flex items-center gap-1">
              <TbFlameFilled className="text-lime-400" />
              <span>{caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1">
              <FiStar className="text-lime-400" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/5 pt-2.5 sm:justify-end sm:gap-3 sm:border-t-0 sm:pt-0">
        <Link
          href={`/workouts/${id}`}
          className="flex-1 text-center rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold text-gray-300 transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white sm:flex-initial"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={handleRemove}
          aria-label="Remove workout"
          className="cursor-pointer text-gray-400 transition-colors hover:text-white sm:static absolute top-3 right-3 p-1 sm:p-0"
        >
          <FiX className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default SavedForLaterCard;