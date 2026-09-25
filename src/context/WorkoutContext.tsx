'use client';

import { IWorkout } from "@/Type/workout";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface WorkoutContextType {
  todayPlan: IWorkout[];
  setTodayPlan: Dispatch<SetStateAction<IWorkout[]>>;
  saveForLater: IWorkout[];
  setSaveForLater: Dispatch<SetStateAction<IWorkout[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [saveForLater, setSaveForLater] = useState<IWorkout[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return () => clearTimeout(timer);
}, []);

  const workoutData = {
    todayPlan,
    setTodayPlan,
    saveForLater,
    setSaveForLater,
    isLoading,
    setIsLoading,
  };

  return (
    <WorkoutContext.Provider value={workoutData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;