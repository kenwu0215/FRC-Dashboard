import NumberUI from "../../components/NumberUI/NumberUI";
import { StatusLight } from "../../components/StatusLight";
import style from "./dashboard.module.css"

export default function DashBoard() {

    // const velocity = useNTValue(shooterVelocity, 0);

    return (
        <main className={style.main_container}>

            <div className={style.nav_bar}>
                <h1 className="h-full text-4xl font-extrabold" > My Dashboard </h1>
                
            </div>
            <section className="p-10 grid grid-cols-5 gap-2 ">
                
                <NumberUI/>

                <NumberUI/>

                <StatusLight active={true} label="RSL"/>

                <p>
                    {/* Velocity: {velocity?.toFixed(2)} RPS */}
                </p>
            </section>

        </main>
    );
}