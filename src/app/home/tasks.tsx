import React from 'react'
import Image from 'next/image'
import img from '@/assets/Task_img.png'

const tasks = () => {
    const card = [
        {index: 1, title: "Выберите услугу", desc: "В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов."},
        {index: 1, title: "Оплатите", desc: "Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите."},
        {index: 1, title: "Получите результат", desc: "Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа."},
    ]
  return (
    <div className='px-10 mt-12 xl:px-32'>
      <h3 className='font-semibold text-[18px]'>Как решать задачи на WorkTap?</h3>
      <p className='text-[12px]'>Идеально подходит для бизнеса и частных лиц</p>
      <div>
        {
            card.map((item, index) => (
                <div key={index} className='flex flex-col gap-3 mt-5'>
                    <Image className='flex justify-center' src={img} width={150} height={150} alt='task_img' priority/>
                    <h3 className='font-bold text-[20px]'>{item.title}</h3>
                    <p className='text-[14px]'>{item.desc}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default tasks
