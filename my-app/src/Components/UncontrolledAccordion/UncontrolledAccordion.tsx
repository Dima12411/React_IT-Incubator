import React, {useState} from "react";

type AccordionType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionType) {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={()=>setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    setCollapsed: () => void
}

export function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={() => props.setCollapsed()}>---{props.title}---</h3>
    )
}

export function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default UncontrolledAccordion;