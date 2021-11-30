import React from "react";

type AccordionType = {
    titleValue: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} setAccordionCollapsed={()=>props.setAccordionCollapsed(!props.accordionCollapsed)}/>
            {!props.accordionCollapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleType = {
    title: string
    setAccordionCollapsed: () => void
}

export function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={props.setAccordionCollapsed}>---{props.title}---</h3>
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

