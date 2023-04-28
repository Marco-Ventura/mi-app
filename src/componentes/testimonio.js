import React from 'react';
import '../styleSheets/testimonio.css'

export function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
            src={require(`../imagenes/testimonio${props.imagen}.png`)} 
            alt='foto de hombre'/>
      <div className='texto-testimonio-contenedor'>
        <p className='nombre-testimonio'> <b>{props.name}</b> in {props.city} </p>
        <p className='cargo-testimonio'>{props.job} in <b>{props.company}</b></p>
        <p className='texto-testimonio'>"{props.testimony}"</p>
        
        
      </div>      

    </div>
  );
}

