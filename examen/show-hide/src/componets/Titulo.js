import React from 'react';


function Titulo({mostrar }) {
    return (
        mostrar ? <div className='contador'>Welcome To React Challenges</div> : null
    );
}

export default Titulo;