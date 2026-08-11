import { useNTValue } from "../nt/hooks";
import { Topics } from "../nt/topics";

export default function AutoChooser() {
  const options = useNTValue(Topics.auto.options, []);
  const selected = useNTValue(Topics.auto.selected, "");
  const active = useNTValue(Topics.auto.active, "");

  return (
    <div className="flex flex-col w-full h-72 bg-blue-900 border-8 border-blue-400 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-blue-700 py-2">
        <p className="text-center text-3xl font-extrabold text-white">
          AutoChooser
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 justify-between p-6">
        {/* Auto select */}
        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold">Select Auto</p>
          <select
            value={selected}
            onChange={(e) => Topics.auto.selected.setValue(e.target.value)}
            className="w-full rounded-xl bg-white px-3 py-2 text-black"
          >
            {options.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/* Running auto */}
        <div className="rounded-xl bg-blue-800 p-4">
          <p className="text-sm text-blue-200">Running Auto</p>
          <p className="text-xl font-bold text-white">
            {active || "None"}
          </p>
        </div>
      </div>
    </div>
  );
}