import { IWorkout } from "@/Type/workout";
import Link from "next/link";
import React from "react";
import SavedForLaterCard from "../Cards/SavedForLaterCard";

interface WorkoutPropsType {
  workouts: IWorkout[];
}

const SavedForLater = ({ workouts }: WorkoutPropsType) => {
  return (
    <div>
      {workouts?.length === 0 ? (
        <div className="py-5 lg:py-10 flex flex-col justify-center items-center text-center border border-white/10">
          <h3 className="font-oswald text-xl font-bold uppercase tracking-wide text-white">
            NOTHING HERE YET
          </h3>
          <p className="mt-2 text-sm text-gray-400 mb-5">
            Browse the library and add a lift to get today moving{" "}
          </p>
          <Link
            className="bg-(--primary) text-black font-semibold py-2.5 px-4 rounded-full"
            href="/"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {workouts.map((item) => (
            <SavedForLaterCard key={item.id} workout={item}></SavedForLaterCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedForLater;
