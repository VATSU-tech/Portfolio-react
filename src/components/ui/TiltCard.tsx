import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";

const TiltCard = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const tiltX = ((y / rect.height) * 2 - 1) * -8;
    const tiltY = ((x / rect.width) * 2 - 1) * 8;
    node.style.setProperty("--tilt-x", `${tiltX}deg`);
    node.style.setProperty("--tilt-y", `${tiltY}deg`);
  };

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--tilt-x", `0deg`);
    node.style.setProperty("--tilt-y", `0deg`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
};

export default TiltCard;
