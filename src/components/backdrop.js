import React, { useEffect, useState } from "react"
import Background from "../images/grass.jpg"
import WaterEffect from "./water-effect"

const Backdrop = () => {
  const containerStyle = {
    zIndex: "-1",
  }

  const [isFront, setIsFront] = useState(false)

  useEffect(() => {
      if (window ?? false) {
        setIsFront(true)
      }
  }, [])

  if (!isFront) return null

  return (
    <div style={containerStyle}>
        <WaterEffect
          style={{
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            background: `url(${Background}) no-repeat center center fixed`,
          }}
          dropRadius={20}
          perturbance={0.001} //intensity of animation/waves
          interactive={true}
          resolution={400} //animation speed
        >
          {({ drop }) => <button onClick={() => drop(50, 50, 20, 0.05)} />}
        </WaterEffect>
    </div>
  )
}

export default Backdrop
