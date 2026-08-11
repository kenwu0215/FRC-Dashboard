// import { useNTValue } from "../nt/hooks";

type StatusProps = {
  active: boolean;
  label: string;
};

export function StatusLight({ active, label }: StatusProps) {

  return (
    <div className="flex items-center gap-2">

      <div
        className={`w-32 h-32 rounded-full ${
          active
            ? "bg-green-400 shadow-green-400/50 shadow-md"
            : "bg-red-400 shadow-red-400/50 shadow-md"
        }`}
      />

      <span className=" text-white text-3xl italic">{label}</span>

    </div>
  );
}