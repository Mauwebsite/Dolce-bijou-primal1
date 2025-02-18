import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'NUESTRO'} text2={'CONTACTO'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          {/* <p className=' font-semibold text-xl text-gray-600'>Our Store</p> */}
          {/* <p className=' text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p> */}
          <p className=' text-gray-500'>Whatsapp: (+54)91 162 000 494 <br /> Email: siani@gmail.com</p>
          {/* <p className=' font-semibold text-xl text-gray-600'>Careers at Forever</p> */}
          <p className=' text-gray-500'>Para un contacto más directo</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-green-400 hover:text-white transition-all duration-500'>Mandame un mensaje</button>
        </div>
      </div>

      {/* <NewsletterBox /> */}

    </div>
  )
}

export default Contact
