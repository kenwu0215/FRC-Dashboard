export default function VisionUI() {
    return (
    <div className="h-64 rounded-2xl overflow-hidden border border-gray-700 bg-black col-span-2 ">
      <img
        src="http://limelight.local:5800/"
        alt="Limelight Camera"
        className="w-full h-full object-cover"
      />
    </div>
  );
}