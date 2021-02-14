import '../../sass/home.scss'
import { flowysvg, pillbottlesvg } from '../../assets/asset'
import { useRef } from 'react';

export default function Home() {
    return (
        <div className='home-wrapper'>
            <div className='flowy-wrapper'>
                {flowysvg}
            </div>
            <div className='home-inner'>
                <div className='home-title'>
                    self-care
                </div>
                <div className='home-title'>
                    made easy.
                </div>
            </div>
            <div className='pill-container'>
                {pillbottlesvg}
            </div>
            {pillarr.map(item => (
                <PillInteractive {...item} />
            ))}
        </div>
    )

}

const pillarr = [
    {
        x: 861,
        y: 371,
        text: 'CROSS-REFERENCE MEDICATIONS'
    },
    {
        x: 1028,
        y: 496,
        text: 'CONNECT WITH A VIRTUAL ASSISTANT'
    },
    {
        x: 1028,
        y: 674,
        text: 'TRACK YOUR MEDICINE INTAKE'
    },
    {
        x: 1313,
        y: 228,
        text: 'FIND COVID TESTING SITES NEAR ME'
    },
    {
        x: 1240,
        y: 342,
        text: 'GET YOUR OWN MODULAR DISPENSER'
    }

]

function calcvw(px) {
    return (px / 19.2) + 'vw'
}

function PillInteractive(props) {

    const pillRef = useRef(null);

    function randomDeg() {
        return Math.floor(Math.random() * Math.floor(360)) + 'Deg';
    }

    return (
        <>
            <div className='pill-text'
                ref={pillRef}
                style={{ left: calcvw(props.x - 190), top: calcvw(props.y - 70) }}
            >{props.text}</div>
            <div

                onMouseEnter={(e) => {
                    pillRef.current.style.opacity = 1
                }}
                className='pill' style={{ left: calcvw(props.x), top: calcvw(props.y), transform: 'rotate(' + randomDeg() + ')' }}>
                hello
            </div>
        </>
    )

}