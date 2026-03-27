import clsx from "clsx";

type SkillSliderProps = {
  level: number; // percentage (0 - 100)
  label: string;
};

const SkillSlider = ({ level, label }: SkillSliderProps) => {
  const widthMap: Record<number, string> = {
    10: "w-[10%]",
    20: "w-[20%]",
    30: "w-[30%]",
    40: "w-[40%]",
    50: "w-[50%]",
    60: "w-[60%]",
    70: "w-[70%]",
    80: "w-[80%]",
    90: "w-[90%]",
    95: "w-[95%]",
    100: "w-full",
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between mb-1 text-sm font-medium">
        <span>{label}</span>
        <span>{level}%</span>
      </div>

      <div className="w-full bg-black z-1 relative h-2.5 rounded-full overflow-hidden">
        <div
          className={clsx(
            "h-full absolute z-2 bg-purple-600 rounded-full transition-all duration-700",
            widthMap[level],
          )}
        />
        <div className="absolute inset-0 w-full -z-1 bg-linear-90 from-transparent via-white/90  to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
};

export default SkillSlider;
