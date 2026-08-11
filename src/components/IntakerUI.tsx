import { useNTValue } from "../nt/hooks";
import { Topics } from "../nt/topics";


export default function IntakerUI() {

    const position = useNTValue(Topics.intaker.position, 0);
    const velocity = useNTValue(Topics.intaker.velocity, 0);
    const voltage = useNTValue(Topics.intaker.voltage, 0.0);
    const current = useNTValue(Topics.intaker.current, 0.0);


    return (
        <div className="w-full h-72 bg-blue-900 border-blue-400 border-8 rounded-2xl overflow-hidden">
            <div>
                <p className=" font-extrabold text-3xl text-white bg-blue-700 flex justify-center"> Intaker </p>
            </div>

            <div className="flex flex-col items-center gap-5 mt-3.5">

                <p className="text-xl font-bold text-white italic">
                    Velocity: {(typeof(velocity) === "number")?velocity.toFixed(2):0.0}
                </p>

                <p className=" text-xl font-bold text-white italic">
                    Voltage: {(typeof(voltage) === "number")?voltage.toFixed(2):0.0}
                </p>

                <p className="text-xl font-bold text-white italic">
                    Current: {(typeof(current) === "number")?current.toFixed(2):0.0}
                </p>

                <p className=" text-xl font-bold text-white italic">
                   Position: {(typeof(position) === "number")?position.toFixed(2):0.0}
                </p>

            </div>
        </div>
    );


}