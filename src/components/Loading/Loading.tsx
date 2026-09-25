
import { LuLoader } from 'react-icons/lu';

const Loading = () => {
  return (    
    <div className="flex flex-col justify-center items-center py-16">
        <LuLoader className="w-8 h-8 animate-spin text-(--primary)" /> 
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Loading...</p>
    </div>
  );
};

export default Loading;