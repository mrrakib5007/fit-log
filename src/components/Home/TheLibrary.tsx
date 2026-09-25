
import WorkoutCard from '../Cards/WorkoutCard';
import { IWorkout } from '@/Type/workout';

const fetchWorkouts = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data;
}

const TheLibrarySection = async () => {
    const workouts: IWorkout[] = await fetchWorkouts();

    console.log(workouts);
  return (
    <div className='container mx-auto px-4 my-10' id='library'>
        <div>
            <h1 className='uppercase font-oswald font-bold text-2xl'>The Library</h1>
            <p className='text-gray-400'>Twelve lifts covering every major muscle group.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {workouts.map((workout) => (
                <WorkoutCard key={workout.id} workout={workout} /> 
            ))}
        </div>
    </div>
  )
}

export default TheLibrarySection