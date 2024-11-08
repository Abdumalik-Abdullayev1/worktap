import React from 'react'
import Image from 'next/image'
import img from '@/assets/Task_img.png'
import img2 from '@/assets/Task_img2.png'
import img3 from '@/assets/Task_img3.png'

const tasks = () => {
  const card = [
    { index: 1, img: <Image className='flex justify-center' src={img} width={150} height={150} alt='task_img' priority />, title: "Выберите услугу", desc: "В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов." },
    { index: 1, img: <Image className='flex justify-center' src={img2} width={150} height={150} alt='task_img' priority />, title: "Оплатите", desc: "Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите." },
    { index: 1, img: <Image className='flex justify-center' src={img3} width={150} height={150} alt='task_img' priority />, title: "Получите результат", desc: "Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа." },
  ]
  return (
    <div className='px-10 mt-12 xl:px-32'>
      <h3 className='font-semibold text-[18px]'>Как решать задачи на WorkTap?</h3>
      <p className='text-[12px]'>Идеально подходит для бизнеса и частных лиц</p>
      <div className='sm:grid grid-cols-2 sm:gap-3 sm:items-center lg:grid-cols-3 '>
        {
          card.map((item, index) => (
            <div key={index} className='flex flex-col items-center text-center gap-3 mt-5 sm:text-left sm:items-start even:mt-12'>
              {item.img}
              <h3 className='font-bold text-[20px]'>{item.title}</h3>
              <p className='text-[14px] w-[80%] xl:w-[90%]'>{item.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default tasks
