import { useEffect, useState } from "react";

export default function Cell({ r, c, molePosition, handleHitCount }) {
  const [hit, setHit] = useState(false);

  const handleClick = (r, c) => {
    if (r == molePosition[0] && c == molePosition[1]) {
      setHit(true);
      handleHitCount();
    }
  };

  useEffect(() => {
    setHit(false);
  }, [molePosition]);

  return (
    <div className="cell" onClick={() => handleClick(r, c)}>
      {r == molePosition[0] && c == molePosition[1] && (
        <>
          <div className="emoji-span-ghost">👻</div>
          {hit && <div className="emoji-span-hammer">🔨</div>}
        </>
      )}
    </div>
  );
}
