import React from 'react'
import Image from 'next/image'
import img from '@/assets/actual_img.svg'

const Actual = () => {
  const card = [
    { index: 1, name: "Сделать дизайн интернет-магазина", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...", button: <button className='w-full py-2 border border-green-500 rounded-[50px] text-green-500 hover:bg-green-500 hover:text-white'>Посмотреть</button> },
    { index: 2, name: "Верстка landing page", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...", button: <button className='w-full py-2 border border-green-500 rounded-[50px] text-green-500 hover:bg-green-500 hover:text-white'>Посмотреть</button> },
    { index: 3, name: "Сделать дизайн сайта-каталога и посадить на какой нибудь ко...", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...", button: <button className='w-full py-2 border border-green-500 rounded-[50px] text-green-500 hover:bg-green-500 hover:text-white'>Посмотреть</button> },
    { index: 4, name: "Продвижение instagram", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...", button: <button className='w-full py-2 border border-green-500 rounded-[50px] text-green-500 hover:bg-green-500 hover:text-white'>Посмотреть</button> },
    { index: 5, name: "Срочно! Нужен веб дизайнер!", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...", button: <button className='w-full py-2 border border-green-500 rounded-[50px] text-green-500 hover:bg-green-500 hover:text-white'>Посмотреть</button> },
  ]
  return (
    <div className='px-10 xl:px-32'>
      <h2 className='font-semibold text-[22px] mt-10'>Актуальные ворки</h2>
      <div className='sm:grid sm:grid-cols-2 gap-3 lg:grid-cols-3'>
        {
          card.map((item, index) => (
            <div key={index} className='border rounded-2xl p-3 flex flex-col gap-3 mt-5 hover:shadow-2xl'>
              <div className='flex gap-2'>
                <Image src={img} width={50} height={50} alt='Current Works' priority />
                <p className='font-semibold'>{item.name}</p>
              </div>
              <p>{item.desc}</p>
              {item.button}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Actual
