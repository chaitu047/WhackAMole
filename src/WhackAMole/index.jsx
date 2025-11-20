import { useEffect, useState } from "react";
import Cell from "./Cell";
import generateRandomPos from "./generateRandomPos";

export default function WhackAMole({ size, delay, handleHitCount }) {
  const [molePos, setMolePos] = useState(generateRandomPos(size));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMolePos(generateRandomPos(size));
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      {Array.from({ length: size }).map((row, rindex) => {
        return (
          <div className="row">
            {Array.from({ length: size }).map((col, cindex) => {
              return (
                <Cell
                  r={rindex}
                  c={cindex}
                  molePosition={molePos}
                  handleHitCount={handleHitCount}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
