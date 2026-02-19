import worldMap from "@/assets/world-map.png";

const dots = [
  { x: 5, y: 42 },   // South America
  { x: 18, y: 28 },  // North America west
  { x: 25, y: 15 },  // North America north
  { x: 22, y: 62 },  // South America south
  { x: 30, y: 12 },  // Canada
  { x: 38, y: 38 },  // Africa west
  { x: 48, y: 42 },  // Africa central
  { x: 50, y: 55 },  // Africa south
  { x: 55, y: 28 },  // Middle East
  { x: 58, y: 32 },  // India region
  { x: 65, y: 22 },  // East Asia
  { x: 70, y: 18 },  // Japan/Korea
  { x: 72, y: 32 },  // Southeast Asia
  { x: 82, y: 58 },  // Australia
  { x: 15, y: 78 },  // Antarctica region
];

const WorldMap = () => (
  <div className="relative w-full flex flex-col items-end">
    <div className="relative w-full">
      <img src={worldMap} alt="World map" className="w-full opacity-90" />
      {/* {dots.map((d, i) => (
        <div
          key={i}
          className="absolute w-2.5 h-2.5 rounded-full bg-primary"
          style={{ left: `${d.x}%`, top: `${d.y}%`, transform: "translate(-50%, -50%)" }}
        />
      ))} */}
    </div>
  </div>
);

export default WorldMap;
