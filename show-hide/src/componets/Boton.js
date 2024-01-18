import React from 'react';
import '../style/Boton.css';
function Boton({ texto, esBotonClick, funcionClick }) {

    return (
        <button className={esBotonClick ? "boton" : "boton"}
            onClick={funcionClick}>
            Show/Hide
        </button>
    )
}

export default Boton;