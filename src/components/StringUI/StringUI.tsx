import style from "./StringUI.module.css"

export default function StringUI() {

    return (
        <div className={style.ui_block}>
            <div className={style.title}>
                <p> Shooter Velocity </p>
            </div>
            <p> Hello </p>
        </div>
    )
}