import React, {useState} from "react";
import s from "./off.module.css"


type PropsType = {
    //on: boolean
}

const UncontrolledOnoff = (props: PropsType) => {

    let [on, setOn] = useState(false)


    const onStyle = {
        border: "1px solid black",
        width: "30px",
        height: "20px",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        border: "1px solid black",
        width: "30px",
        height: "20px",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !on ? "red" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }
    const onClicked = () => {
        setOn(true)
    }
    const offClicked = () => {
        setOn(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>ON
            </div>
            <div style={offStyle} onClick={offClicked}>OFF
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
//     return (
//         <div>
//             <div className={s.border}>
//                 <>ON</>
//             </div>
//             <div className={s.border2}>
//                 <>OFF</>
//             </div>
//             <div className={s.circle}>
//
//             </div>
//
//         </div>
//     )
// }

export default UncontrolledOnoff;