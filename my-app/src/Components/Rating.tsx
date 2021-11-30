import React, {useState} from "react";
import {RatingValueType} from "./UncontrolledRating/UncontrolledRating";

export type RatingType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

function Rating({value, setRatingValue, ...props}: RatingType) {

    return (
        <div>
            <Star selected={value > 0} setRatingValue={setRatingValue} value={1}/>
            <Star selected={value > 1} setRatingValue={setRatingValue} value={2}/>
            <Star selected={value > 2} setRatingValue={setRatingValue} value={3}/>
            <Star selected={value > 3} setRatingValue={setRatingValue} value={4}/>
            <Star selected={value > 4} setRatingValue={setRatingValue} value={5}/>
        </div>
    )
}

export type StarPropsType = {
    selected: boolean
    setRatingValue: (value: RatingValueType) => void
    value: RatingValueType
}

function Star({selected, ...props}: StarPropsType) {
    return (
        <span onClick={() => props.setRatingValue(props.value)}>
        {selected ? <b>star </b> : "star "}
    </span>
    )
}

export default Rating;