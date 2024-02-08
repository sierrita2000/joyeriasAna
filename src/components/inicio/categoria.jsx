import '../../css/inicio/categoria.css'

export default function Categoria ({ imagen, titulo }) {


    return (
        <div className='categoria__tarjeta'>
            <img src={imagen} className={titulo == 'COLLARES' ? 'categoria_collar categoria_imagen' : 'categoria_imagen'} />
            <h2>{titulo}</h2>
        </div>
    )
}