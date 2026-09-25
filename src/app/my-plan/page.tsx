'use client';

import SavedForLater from "@/components/MyPlan/SavedForLater";
import TodayPlans from "@/components/MyPlan/TodayPlans";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/Type/workout";
import { useContext, useMemo, useState } from "react";

type SortOption = "duration" | "calories" | "rating";

const EMPTY_WORKOUTS: IWorkout[] = [];

const sortWorkouts = (workouts: IWorkout[], sortBy: SortOption) => {
  return [...workouts].sort((a, b) => {
    if (sortBy === "duration") return b.duration - a.duration;
    if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });
};

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"todaysPlan" | "saved">("todaysPlan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");
  const context = useContext(WorkoutContext);

  const todayPlan = context?.todayPlan ?? EMPTY_WORKOUTS;
  const saveForLater = context?.saveForLater ?? EMPTY_WORKOUTS;

  const currentWorkouts = activeTab === "todaysPlan" ? todayPlan : saveForLater;

  const totalExercises = currentWorkouts.length;
  const totalMinutes = currentWorkouts.reduce((acc, curr) => acc + (curr.duration || 0), 0);
  const totalCalories = currentWorkouts.reduce((acc, curr) => acc + (curr.caloriesBurned || 0), 0);

  const sortedTodayPlan = useMemo(() => sortWorkouts(todayPlan, sortBy), [todayPlan, sortBy]);
  const sortedSaveForLater = useMemo(() => sortWorkouts(saveForLater, sortBy), [saveForLater, sortBy]);

  return (
    <div className='container mx-auto my-10 p-5 text-white'>
      <div>
        <h1 className='font-oswald text-3xl font-bold uppercase tracking-wider lg:text-4xl'>My plan</h1>
        <p className='mt-2 text-sm text-gray-400'>
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className='mt-8 grid grid-cols-1 gap-5 rounded-2xl border border-white/10 bg-[#161a23] p-6 sm:grid-cols-3'>
        <div className='border-l-2 border-white/10 pl-5 lg:border-none'>
          <p className='text-xs font-semibold uppercase tracking-wider text-gray-400'>Exercises</p>
          <h2 className='mt-1 font-oswald text-4xl font-extrabold text-(--primary)'>{totalExercises}</h2>
        </div>
        <div className='border-l-2 border-white/10 pl-5'>
          <p className='text-xs font-semibold uppercase tracking-wider text-gray-400'>Minutes</p>
          <h2 className='mt-1 font-oswald text-4xl font-extrabold text-white'>{totalMinutes}</h2>
        </div>
        <div className='border-l-2 border-white/10 pl-5'>
          <p className='text-xs font-semibold uppercase tracking-wider text-gray-400'>Calories</p>
          <h2 className='mt-1 font-oswald text-4xl font-extrabold text-white'>{totalCalories}</h2>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex rounded-xl border border-white/10 bg-[#161a23] p-1.5">
            <button
              type="button"
              onClick={() => setActiveTab("todaysPlan")}
              className={`rounded-lg px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "todaysPlan"
                  ? "bg-(--primary) text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "saved"
                  ? "bg-(--primary) text-black shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sortWorkout" className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Sort by:
            </label>
            <div className="relative">
              <select
                name="sortWorkout"
                id="sortWorkout"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#161a23] py-2 pl-4 pr-10 text-xs font-medium text-gray-200 outline-none transition-colors hover:border-white/20 focus:border-(--primary)"
              >
                <option value="duration" className="bg-[#161a23] text-white">Duration</option>
                <option value="calories" className="bg-[#161a23] text-white">Calories</option>
                <option value="rating" className="bg-[#161a23] text-white">Rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl">
          {activeTab === "todaysPlan" ? (
            <TodayPlans workouts={sortedTodayPlan} />
          ) : (
            <SavedForLater workouts={sortedSaveForLater} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;