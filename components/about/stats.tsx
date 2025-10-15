import { stats } from "@/app/data/data";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-16 mt-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="space-y-3 group transform transition-all duration-500 hover:scale-105"
        >
          <div
            className={`text-4xl md:text-5xl font-bold dark:text-red-500 dark:drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] text-blue-600 transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(239,68,68,0.7)]`}
          >
            {stat.value}
          </div>
          <div
            className="text-sm uppercase tracking-wider
             dark:text-gray-400 text-gray-500"
          >
            {stat.label}
          </div>
          <div
            className="mx-auto h-0.5 w-10 transition-all duration-500 group-hover:w-16 
             dark:bg-red-500 bg-blue-600
            "
          ></div>
        </div>
      ))}
    </div>
  );
}
