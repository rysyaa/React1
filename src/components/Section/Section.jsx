import React from 'react'

const Section = (props) => {
    const styleContainer = {
        background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        width: "100%",
        height: "500px"
    }
    const styleTable = {
        padding: "4% 0 0 22%",
        width: "80%",
    }
    const styleTd = {
        fontSize: "34px",
        padding: "40px 0 0 0",
        fontWeight: "bold",
        color: "brown"
    }
    const styleTableTh = {
        padding: "0 0 0 22%",
        width: "80%",
        position: "absolute",
        display: "flex",
        gap: "19.5%"
    }
    const styleTh = {
        fontSize: "36px",
        padding: "40px 0 0 0",
        fontWeight: "bold",
        color: "red"
    }
  return (
    <div style={styleContainer}>
        <div style={styleTableTh}>
            <span style={styleTh}>Name</span>
            <span style={styleTh}>Lastname</span>
            <span style={styleTh}>Age</span>
        </div>
        <table style={styleTable}>
            {props.users.map((elem) => (
                <tr key={elem.id}>
                    <td style={styleTd}>{elem.name}</td>
                    <td style={styleTd}>{elem.lastName}</td>
                    <td style={styleTd}>{elem.age}</td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default Section