import React from "react";

export type OnoffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

const Onoff = (props: OnoffPropsType) => {
    const onStyle = {
        border: "1px solid black",
        width: "30px",
        height: "20px",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        border: "1px solid black",
        width: "30px",
        height: "20px",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !props.on ? "red" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }
    const onHandler = (on: boolean) => {
        props.setOn(on)
    }
    return (
        <div>
            <div style={onStyle} onClick={() => onHandler(true)}>ON</div>
            <div style={offStyle} onClick={() => onHandler(false)}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default Onoff;