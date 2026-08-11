import { useNTValue } from "../nt/hooks";
import { Topics } from "../nt/topics";

export default function ShooterUI() {

    const velocity = useNTValue(Topics.shooter.velocity, 0);
    const voltage = useNTValue(Topics.shooter.voltage, 0);
    const current = useNTValue(Topics.shooter.current, 0);
    const ready = useNTValue(Topics.shooter.ready_for_shooting, false);

    return (
        <div className="w-full h-72 bg-blue-900 border-blue-400 border-8 rounded-2xl overflow-hidden">
            <div>
                <p className=" font-extrabold text-3xl text-white bg-blue-700 flex justify-center"> Shooter </p>
            </div>

            <div className="flex flex-col items-center gap-5 mt-3.5">

                <p className="text-xl font-bold text-white italic">
                    Velocity: {
                        (typeof(velocity) == "number") ? velocity.toFixed(2):0.0
                    }
                </p>

                <p className=" text-xl font-bold text-white italic">
                    Voltage: {
                        (typeof(voltage) == "number") ? voltage.toFixed(2):0.0
                    }
                </p>

                <p className=" text-xl font-bold text-white italic">
                    Current: {
                        (typeof(current) == "number") ? current.toFixed(2):0.0
                    }
                </p>

                <p className=" text-xl font-bold text-white italic flex items-center">
                    Ready for Shooting
                    {(!ready)
                        ?<div className="bg-red-600 w-2.5 h-2.5 relative top-0.5 left-2 rounded-4xl"></div>
                        :<div className="bg-green-500 w-2.5 h-2.5 relative top-0.5 left-2 rounded-4xl"></div>
                    }
                </p>

            </div>
        </div>
    );




}