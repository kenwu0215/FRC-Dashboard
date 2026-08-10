import { useNTValue } from "../nt/hooks";
import { shooterVelocity } from "../nt/topics";


export default function DashBoard() {

    const velocity = useNTValue(shooterVelocity, 0);

    return (
        <main>
            <h1> My Dashboard </h1>

            <section>
                <h2>Shooter</h2>

                <p>
                    Velocity: {velocity?.toFixed(2)} RPS
                </p>
            </section>

        </main>
    );
}