import React from 'react'

const Header = () => {
    const styleCont = {
        width: "100%",
        height: 100,
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(8,34,137,1) 43%, rgba(7,50,147,1) 47%, rgba(6,70,160,1) 54%, rgba(6,81,168,1) 58%, rgba(0,212,255,1) 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
    }
    const styleSpan = {
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
    }
  return (
    <div>
        <div style={styleCont}>
            <span style={styleSpan}>Home</span>
            <span style={styleSpan}>Shop</span>
            <span style={styleSpan}>Popular</span>
            <span style={styleSpan}>Info</span>
            <span style={styleSpan}>About me</span>
        </div>
    </div>
  )
}

export default Header