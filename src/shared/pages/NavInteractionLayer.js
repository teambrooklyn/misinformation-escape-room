import React from 'react'

import useWindowDimensions from "@/shared/Hubs/computerHub/getWindowDim";

export default function NavInteractionLayer() {

    const {height, width} = useWindowDimensions()

    console.log(height, width)

    return (
        <div style={{backgroundImage: `url(/images/room/room.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: `100vh`,
                    height: `100vw`
                    }}>
            test
        </div>
    )
}
