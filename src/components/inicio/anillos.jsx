import { useState } from 'react'
import '../../css/inicio.css'

export default function Anillos () {

    const [ turno, setTurno ] = useState(0)

    setInterval(() => {
        (turno === 3) ? setTurno(0) : setTurno(turno+1)
    }, 5000)
    
    
    return (
        <div className='tubo__anillos'>
            <img src="../../anillo_cara.png" className= {`tubo__anillos__foto ${ turno == 0 ? 'mostrado' : '' }`} />
            <img src="../../anillo_diamantes.png" className= {`tubo__anillos__foto ${ turno == 1 ? 'mostrado' : '' }`} />
            <img src="../../anillo_luna.png" className= {`tubo__anillos__foto ${ turno == 2 ? 'mostrado' : '' }`} />
            <img src="../../anillo_gordo.png" className= {`tubo__anillos__foto ${ turno == 3 ? 'mostrado' : '' }`} />
        </div>
    )
}