import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>Envío rápido y garantizado</p>
        <p className='text-gray-400'>Ofrecemos un envío como más cómodo le parezca</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
        <p className='font-semibold'>Política de deolución</p>
        <p className='text-gray-400'>Le proveemos 48 horas para devoluciones gratis </p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
        <p className='font-semibold'>La mejor atención al cliente</p>
        <p className='text-gray-400'>Le proveemos una atención al cliente 24/7</p>
      </div>

    </div>
  )
}

export default OurPolicy
