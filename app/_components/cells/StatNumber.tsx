import { useEffect, useRef, useState } from "react";

type StatProps = {
  target: number;
};

const StatNumber = ({ target }: StatProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 2000;
        const startTime = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1);
          const current = Math.floor(progress * target);

          setValue(current);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.5});
    observer.observe(element);

    return () => observer.disconnect();

  }, [target]);
  return (
    <div ref={ref} className="text-4xl font-bold">
      {value}
    </div>
  );
};

export default StatNumber