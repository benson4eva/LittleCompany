import React, { useState } from "react"
import "./content.css"

function Content(props) {
  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(event.target.value)
    console.log(event.target.value)
  }

  const styles = {
    container: {
      pointerEvents: "none",
      position: "absolute",
      zIndex: "10",
      width: "100%",
      height: "100%",
      color: "white"
    },
    heading1: {
      fontFamily: "Ogg Regular",
      fontSize: "34pt"
    },
    heading2: {
      fontFamily: "Ogg Regular",
      fontSize: "24pt",
      lineHeight: "normal"
    },
    heading3: {
      fontFamily: "Ogg Regular",
      fontSize: "20pt"
    },
    inputField: {
      background: "rgba(255,255,255,0.3)",
      color: "rgba(255,255,255,1)",
      margin: "-2px",
      padding: "5px",
      width: "101%",
      border: "0"
    },
    inputArea: {
      pointerEvents: "auto",
      color: "white",
      border: "2px solid white",
      width: "100%",
      color: "white"
    },
    buttonStyle: {
      pointerEvents: "auto",
      fontStyle: "bold",
      fontWeight: "550",
      letterSpacing: "0.2pt",
      padding: "5px 2px 0px 2px",
      background: "transparent",
      color: "white",
      border: "0",
      borderBottom: "1px solid white"
    }
  }

  let content
  props.email === "" ? content =
    <div>
      <label style={styles.heading2} >Be the first to get access.</label>
      <div style={styles.inputArea}>
        <input
          style={styles.inputField}
          type="text"
          id="user-email"
          placeholder="Email address"
          onChange={(event) => handleChange(event)}
        />
      </div>
      <button
        style={styles.buttonStyle}
        className="mt-4"
        onClick={() => props.setEmail(input)}
      >
        Submit
      </button>
    </div>
    : content =
    <div>
      <label style={styles.heading2} >Thank you!</label>
      <label style={styles.heading3} className="mt-1">
        You'll be the first to get access to our page.
        We'll be in touch soon
      </label>
    </div>

  return (
    <div style={styles.container} className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-7 d-flex justify-content-center">
            <label className="mb-5 pb-5 mt-3" style={styles.heading1}>
              Living Skin
            </label>
          </div>
          <div className="col-md-3 m-2 mt-3">
            {content}
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div >
  )
}

export default Content