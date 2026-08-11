import field from "../assets/2026filed.png"
import { useNTValue } from "../nt/hooks";
import { Topics } from "../nt/topics";

const FIELD_WIDTH = 17.55;
const FIELD_HEIGHT = 8.05;

export function FieldMap() {
  const x = useNTValue(Topics.swerve.pose.x, 0);
  const y = useNTValue(Topics.swerve.pose.y, 0);
  const rotation = useNTValue(Topics.swerve.pose.rotation, 0);

  // const x = 4.673;
  // const y = 4.003;
  // const rotation = -5.341;

  const mapWidth = 600;
  const mapHeight = 276;

  const px_offset = 0.025;

  const px = (1 - (x / FIELD_WIDTH) - px_offset) * mapWidth;
  const py = (y / FIELD_HEIGHT) * mapHeight;

  return (
    <div className={`relative w-150 h-69 rounded-xl overflow-hidden border border-zinc-700 col-span-2`}>
      <img
        src={field}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <svg className="absolute inset-0 w-full h-full">
        <g
          transform={`translate(${px}, ${py}) rotate(${(-rotation - 90.0)})`}
        >
          <polygon
            points="0,-10 8,10 -8,10"
            fill="#22c55e"
            stroke="white"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}