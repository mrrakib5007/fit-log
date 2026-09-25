'use client';

import { IWorkout } from "@/Type/workout";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface WorkoutContextType {
  todayPlan: IWorkout[];
  setTodayPlan: Dispatch<SetStateAction<IWorkout[]>>;
  saveForLater: IWorkout[];
  setSaveForLater: Dispatch<SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [saveForLater, setSaveForLater] = useState<IWorkout[]>([]);

  const workoutData = {
    todayPlan,
    setTodayPlan,
    saveForLater,
    setSaveForLater,
  };

  return (
    <WorkoutContext.Provider value={workoutData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;