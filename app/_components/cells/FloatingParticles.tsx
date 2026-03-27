import { useState } from "react";
import clsx from "clsx";

interface Particle {
  id: number;
  symbol: string;
  left: string;
  duration: string;
  delay: string;
}



const leftPositions = [
  "left-[5%]","left-[10%]","left-[20%]","left-[30%]",
  "left-[40%]","left-[50%]","left-[60%]","left-[70%]",
  "left-[80%]","left-[90%]"
];

const delays = [
  "[animation-delay:0s]",
  "[animation-delay:2s]",
  "[animation-delay:4s]",
  "[animation-delay:6s]",
  "[animation-delay:8s]"
];

const durations = [
  "[animation-duration:10s]",
  "[animation-duration:12s]",
  "[animation-duration:14s]",
  "[animation-duration:16s]",
  "[animation-duration:18s]"
];

const symbols = [
  "{","}","[","]","(",")","<",">","/","*","=","+","-",";",":","&","|","%","$","#","@"
];

const FloatingParticles = () => {
const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: leftPositions[Math.floor(Math.random() * leftPositions.length)],
      delay: delays[Math.floor(Math.random() * delays.length)],
      duration: durations[Math.floor(Math.random() * durations.length)]
    }))
  );
 
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={clsx(
            "particle absolute animate-float text-2xl font-bold",
            p.left,
            p.delay,
            p.duration
          )}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
};


export default FloatingParticles;
