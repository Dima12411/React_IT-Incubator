import React, {useState} from "react";




export type RatingValueType = 1 | 2 | 3 | 4 | 5

function UncontrolledRating() {

    let [value, setValue] = useState<RatingValueType>(1)

    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
        </div>
    )
}



type StarProps = {
    selected: boolean
    setValue: () => void
}

function Star({selected, ...props}: StarProps) {
   const valueHandler = () => {
       props.setValue()
   }
    return (
        <span onClick={valueHandler}>
            {selected ? <b>star </b> : "star " }
        </span>
    )
}

export default UncontrolledRating;