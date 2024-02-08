import '../css/menu.css'

export default function Menu () {


    return (
        <div className="menu">
            <div className="menu__logo">LOGO</div>
            <nav className='menu__navegacion'>
                <button className="menu__boton selected">INICIO</button>
                <button className="menu__boton">JOYAS</button>
                <button className="menu__boton">CONTACTO</button>
            </nav>
        </div>
    )
}