import '../css/inicio.css'
import Footer from './footer'
import Anillos from './inicio/anillos'
import Categoria from './inicio/categoria'

export default function Inicio () {

    const categorias_info = [
        {
            imagen: '../../../pulsera_categoria.png',
            titulo: 'PULSERAS'
        },
        {
            imagen: '../../../anillo_categoria.png',
            titulo: 'ANILLOS'
        },
        {
            imagen: '../../../collar_categoria.png',
            titulo: 'COLLARES'
        }
    ]

    return (
        <div className="inicio">
            <div className="inicio__hero_image">
                <div className='inicio__titulo'>
                    <h1>NOMBRE</h1>
                    <h2>subtitulo nombre</h2>
                </div>
                <div className="contenedor_tubo">
                    <img src="../../tubo_inicio.png" className="tubo__imagen" />
                    <div className="tubo__borde"></div>
                    <Anillos />
                </div>
                <div className='tubo_sombra'></div>
            </div>
            <div className="categorias">
                {
                    categorias_info.map(categoria => (
                        <Categoria {...categoria}/>
                    ))
                }
            </div>
            <div className="descripcion">
                <h2>Nuestra joyas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non sit minima facilis dignissimos nisi voluptatibus, eaque minus eum. Esse accusamus alias qui harum amet. Quos, obcaecati asperiores maxime eligendi ipsa odit esse architecto consectetur! Consectetur vitae fuga deserunt placeat? Placeat iste libero repellat sapiente blanditiis odit adipisci velit odio!</p>
            </div>
            <Footer />
        </div>
    )
}