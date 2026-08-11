import { useNTValue } from "../nt/hooks";
import { Topics } from "../nt/topics";

export default function TransferUI() {

    const velocity = useNTValue(Topics.Transfer.velocity, 0.0);
    const voltage = useNTValue(Topics.Transfer.voltage, 0.0);
    const current = useNTValue(Topics.Transfer.current, 0.0);
    const temp = useNTValue(Topics.Transfer.temp,0.0);

    const status = (temp >= 65.0) ? "overheat" : "ok";

    return(
        <div className="w-full h-72 bg-blue-900 border-blue-400 border-8 rounded-2xl overflow-hidden">
            <div>
                <p className=" font-extrabold text-3xl text-white bg-blue-700 flex justify-center"> Transfer </p>
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

                <p className={` text-xl font-bold italic 
                    ${status == "ok" && "text-white"}
                    ${status == "overheat" && "text-red-600"}
                    `}>
                    Temp: {
 
                        (temp >=65.0) ?temp.toFixed(2.0) +"😡" : temp.toFixed(2)
                    }
                </p>

            </div>
        </div>
    );

}