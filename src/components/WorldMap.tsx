const dots = [
  { x: 25, y: 25 }, { x: 35, y: 18 }, { x: 30, y: 55 },
  { x: 45, y: 15 }, { x: 50, y: 30 }, { x: 55, y: 45 },
  { x: 60, y: 25 }, { x: 65, y: 35 }, { x: 70, y: 20 },
  { x: 72, y: 40 }, { x: 75, y: 30 }, { x: 78, y: 55 },
  { x: 80, y: 25 }, { x: 82, y: 45 }, { x: 85, y: 60 },
  { x: 55, y: 55 }, { x: 48, y: 50 },
];

const WorldMap = () => (
  <div className="relative w-full h-full min-h-[300px]">
    <svg viewBox="0 0 100 70" className="w-full h-full opacity-20">
      {/* Simplified world map dots pattern */}
      {Array.from({ length: 50 }).map((_, row) =>
        Array.from({ length: 80 }).map((_, col) => {
          const x = col * 1.25 + 1;
          const y = row * 1.4 + 1;
          // Create rough continent shapes
          const isLand =
            (x > 15 && x < 35 && y > 10 && y < 50) || // Americas
            (x > 38 && x < 58 && y > 10 && y < 45) || // Europe/Africa
            (x > 55 && x < 85 && y > 10 && y < 55) || // Asia
            (x > 75 && x < 95 && y > 50 && y < 65);   // Australia
          if (!isLand || Math.random() > 0.4) return null;
          return (
            <circle key={`${row}-${col}`} cx={x} cy={y} r="0.3" fill="hsl(var(--muted-foreground))" />
          );
        })
      )}
    </svg>
    {/* Red location dots */}
    {dots.map((d, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-primary"
        style={{ left: `${d.x}%`, top: `${d.y}%` }}
      />
    ))}
  </div>
);

export default WorldMap;
