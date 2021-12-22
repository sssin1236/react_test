import { useState } from "react";


const deg = 45;

function Btns(){
    let [num, setNum] = useState(0);

    function plus(e){
        setNum(++num);
        const frame = e.currentTarget.closest("figure").querySelector("section");
        frame.style.transform = `rotate(${deg*num}deg)`;
    }

    function minus(e){
        setNum(--num);
        const frame = e.currentTarget.closest("figure").querySelector("section");
        frame.style.transform = `rotate(${deg*num}deg)`;
    }
    return(
        <>
            <div className="btnPrev" onClick={e=> plus(e)} >PREV</div>
            <div className="btnNext" onClick={e=> minus(e)} >NEXT</div>
        </>
    )
}

export default Btns;