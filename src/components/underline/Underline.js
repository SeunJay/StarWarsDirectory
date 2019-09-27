import React from 'react'

const Underline = (props) => {
  return (
    <hr
      className="shadow"
      style={{
        width: `${props.width}`,
        background: `${props.background}`,
        marginTop: `${props.marginTop}`,
        height: `${props.height}`,
        border: "none"
      }}
    ></hr>
  );
}

export default Underline
