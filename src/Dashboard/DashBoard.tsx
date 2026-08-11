import AutoChooser from "../components/AutoChooser";
import { FieldMap } from "../components/FieldMap";
import IntakerUI from "../components/IntakerUI";
import ShooterUI from "../components/ShooterUI";
import { StatusLight } from "../components/StatusLight";
import TransferUI from "../components/TransferUI";
import VisionUI from "../components/VisionUI";
import style from "./dashboard.module.css"

export default function DashBoard() {

    // const velocity = useNTValue(shooterVelocity, 0);

    return (
        <main className={style.main_container}>

            <div className={style.nav_bar}>
                <h1 className="h-full text-4xl font-extrabold" > 8584 Dashboard </h1>
                
            </div>
            <section className="p-8 grid grid-cols-5 gap-10">

                <ShooterUI/>

                <IntakerUI/>

                <TransferUI/>

                <VisionUI/>
                <StatusLight active={true} label="enabled"/>

                <FieldMap/>

                <AutoChooser/>


                <p>
                    {/* Velocity: {velocity?.toFixed(2)} RPS */}
                </p>
            </section>

        </main>
    );
}