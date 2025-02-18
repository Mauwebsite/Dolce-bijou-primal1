import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>

        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>En Dolce Bijou es un empresa cuyo objetivo es abastecer a nuestros clientes con productos de calidad y precios accesibles 💜, nosotros creemos que la bisutería es mucho más que un simple accesorio: es una forma de expresar tu personalidad, celebrar tu individualidad y añadir un toque de magia a cada día.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>NEGOCIO</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            {/* <li>Inicio</li>
            <li>Catalogo</li>
            <li>Contacto</li> */}
            {/* <li>Private policy</li> */}
            <Link>
              <NavLink to="/" className='flex flex-col gap-1'><li>Inicio</li></NavLink>
              <NavLink to='/collection' className='flex flex-col gap-1'><li>Catalogo</li></NavLink>
              <NavLink to='/contact' className='flex flex-col gap-1'><li>Contacto</li></NavLink>
            </Link>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>CONTACTANOS</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Whatsapp: (+54) 9 11 6200-0494</li>
            <li> Email: siani@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ macrossoluciones.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
