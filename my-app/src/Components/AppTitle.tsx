import React from "react";

type AppTitleType = {
    title: string
}

function AppTitle (props: AppTitleType) {
    return (
        <>{props.title}</>
    )
}

export default AppTitle;