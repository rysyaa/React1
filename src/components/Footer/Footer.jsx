import React from 'react'

const Footer = () => {
    const styleCont = {
        width: "100%",
        height: 140,
        background: "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(1,64,102,1) 46%, rgba(2,0,36,1) 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        position: "absolute",
        bottom: 0,
    }
    const styleFootCont = {
        // width: "100%",
        // height: 100,
        // background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(8,34,137,1) 43%, rgba(7,50,147,1) 47%, rgba(6,70,160,1) 54%, rgba(6,81,168,1) 58%, rgba(0,212,255,1) 100%)",
        display: "flex",
        flexDirection: "column"
        // alignItems: "center",
        // justifyContent: "space-evenly",
        // position: "absolute",
        // bottom: 0,
    }
    const styleSpan = {
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
    }
  return (
        <div style={styleCont}>
            <div style={styleFootCont}>
                <span style={styleSpan}>Instagram</span>
                <span style={styleSpan}>Facebook</span>
                <span style={styleSpan}>Twitter</span>
            </div>
            <div style={styleFootCont}>
                <span style={styleSpan}>Devices</span>
                <span style={styleSpan}>Press</span>
            </div>
            <div style={styleFootCont}>
                <span style={styleSpan}>Terms</span>
                <span style={styleSpan}>Add Choices</span>
            </div>
            <div style={styleFootCont}>
                <span style={styleSpan}>Store</span>
            </div>
        </div>
  )
}

export default Footer