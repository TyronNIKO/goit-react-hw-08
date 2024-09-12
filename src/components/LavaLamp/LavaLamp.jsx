import css from "./LavaLamp.module.css";
import clsx from "clsx";

const LavaLamp = () => {
    return (
        <div className={css.lavalamp}>
            {/* <div className={css.bulb}></div> */}
            <div class={css.lamp}>
                <div class={css.lava}>
                    <div class={css.blob}></div>
                    <div class={css.blob}></div>
                    <div class={css.blob}></div>
                    <div class={css.blob}></div>
                    <div class={css.blob}></div>
                    <div class={css.blob}></div>
                    <div class={css.blob}></div>
                    <div class={css.blob}></div>
                    <div class={clsx(css.blob, css.top)}></div>
                    <div class={clsx(css.blob, css.bottom)}></div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 70 -10" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};
export default LavaLamp;
