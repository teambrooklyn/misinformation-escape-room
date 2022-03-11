import React from 'react'

// import useWindowDimensions from "@/shared/Hubs/computerHub/getWindowDim";

export default function Testing() {

    // const {height, width} = useWindowDimensions()

    return (
        <div style={{backgroundImage: `url(/images/room/room.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center center",
                    width: `800px`,
                    height: `700px`
                    }}>
            test
        </div>
    )
}
