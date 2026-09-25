"use client";

import { useContext } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/Type/workout";

const WorkoutButtons = ({ workout }: { workout: IWorkout }) => {
  const context = useContext(WorkoutContext);

  if (!context) return null;

  const { todayPlan, setTodayPlan, saveForLater, setSaveForLater } = context;

  const isAlreadyInTodayPlanList = todayPlan.some((item) => item.id === workout.id);
   const isAlreadyInSaveForLaterList = saveForLater.some((item) => item.id === workout.id);


  const handleAddToPlan = () => {

    if (isAlreadyInTodayPlanList) {
      return toast.error(`${workout.name} is already added to today's plan!`);
    }

    setTodayPlan([...todayPlan, workout]);
    toast.success(`${workout.name} added to today's plan!`);
  };

  const handleSaveForLater = () => {
    if (isAlreadyInSaveForLaterList) {
      return toast.error(`${workout.name} is already saved for later!`);      
    }

    setSaveForLater([...saveForLater, workout]);
    toast.success(`${workout.name} added to saved for later!`);
  };

  return (
    <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap">
      <button
        type="button"
        onClick={handleAddToPlan}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-(--primary) px-6 py-3.5 text-sm font-bold text-black shadow-lg transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
      >
        <FaCalendarAlt className="text-base stroke-[2.5]" />
        <span>
          {
            isAlreadyInTodayPlanList ? "Already in today's plan" : "Add to today's plan"
          }
        </span>
      </button>

      <button
        type="button"
        onClick={handleSaveForLater}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-transparent px-6 py-3.5 text-sm font-semibold text-gray-300 transition-colors hover:border-white/30 hover:bg-white/5 sm:w-auto"
      >
        <FiBookmark className="text-base stroke-2" />
        <span>
          {
            isAlreadyInSaveForLaterList ? "Already in Save for later" : "Save for later"
          }
        </span>
      </button>
    </div>
  );
};

export default WorkoutButtons;