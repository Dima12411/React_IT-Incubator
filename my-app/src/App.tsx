import React, {useState} from "react";
import Rating from "./Components/Rating";
import AppTitle from "./Components/AppTitle";
import {Accordion} from "./Components/Accordion/Accordion";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating, {RatingValueType} from "./Components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnoff from "./Components/On/UncontrolledOnoff";
import Onoff from "./Components/On/Onoff";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false)
    return (
        <div className={"Apps"}>
            <Onoff on={on} setOn={setOn}/>
            <UncontrolledOnoff/>
            {/* <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>*/}
            <UncontrolledRating/>
            {/*<AppTitle title={"This is APP component"}/>*/}
            {/*<AppTitle title={"My friends"}/>*/}
            {/*<Rating value={ratingValue} setRatingValue={setRatingValue}/>*/}
            {/*<Rating value={4}/>*/}
            <Accordion titleValue={"Menu"} accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}/>
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
        </div>
    )
}

export default App;