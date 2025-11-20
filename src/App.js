import { useState } from "react";
import "./styles.css";
import WhackAMole from "./WhackAMole";

export default function App() {
  const [hitCount, setHitCount] = useState(0);

  const handleHitCount = () => {
    setHitCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>No. of hits: {hitCount}</h1>
      <WhackAMole size={3} delay={1000} handleHitCount={handleHitCount} />
    </div>
  );
}
