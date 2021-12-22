import { useState } from "react";


const deg = 45;

function Btns(props){
    let [num, setNum] = useState(0);

    function plus(){
        setNum(++num);
        //const frame = e.currentTarget.closest("figure").querySelector("section");
        props.frame.current.style.transform = `rotate(${deg*num}deg)`;
    }

    function minus(){
        setNum(--num);
        //const frame = e.currentTarget.closest("figure").querySelector("section");
        props.frame.current.style.transform = `rotate(${deg*num}deg)`;
    }
    return(
        <>
            <div className="btnPrev" onClick={e=> plus(e)} >PREV</div>
            <div className="btnNext" onClick={e=> minus(e)} >NEXT</div>
        </>
    )
}

export default Btns;