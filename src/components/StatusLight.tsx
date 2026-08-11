// import { useNTValue } from "../nt/hooks";
import { nt } from "../nt/nt";

type StatusProps = {
  active: boolean;
  label: string;
};

export function StatusLight({ label }: StatusProps) {

  return (
    <div className="flex items-center justify-center gap-2">

      <div
        className={`w-32 h-32 rounded-full ${
          (nt.isRobotConnected() === true)
            ? "bg-green-400 shadow-green-400/50 shadow-md"
            : "bg-red-400 shadow-red-400/50 shadow-md"
        }`}
      />

      <span className=" text-white text-3xl italic">{label}</span>

    </div>
  );
}