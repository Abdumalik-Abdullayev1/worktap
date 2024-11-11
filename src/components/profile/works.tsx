import Image from "next/image"
import MyWorks from '@/assets/myWorks.svg'
import Verctor from '@/assets/Vector.svg'

const Page = () => {
  const myWorks = [
    { id: 1, img: <div className="w-full h-full flex flex-col items-center justify-center"><Image src={Verctor} width={100} alt="works" priority /><h2 className="text-3xl text-green-600">Создать ворк</h2></div> },
    { id: 2, img: <Image src={MyWorks} width={600} alt="works" priority />, title: "Дизайн сайта", price: "50 000 тенге" },
    { id: 3, img: <Image src={MyWorks} width={600} alt="works" priority />, title: "Дизайн сайта", price: "50 000 тенге" },
    { id: 4, img: <Image src={MyWorks} width={600} alt="works" priority />, title: "Дизайн сайта", price: "50 000 тенге" },
    { id: 5, img: <Image src={MyWorks} width={600} alt="works" priority />, title: "Дизайн сайта", price: "50 000 тенге" },
    { id: 6, img: <Image src={MyWorks} width={600} alt="works" priority />, title: "Дизайн сайта", price: "50 000 тенге" },
    { id: 7, img: <Image src={MyWorks} width={600} alt="works" priority />, title: "Дизайн сайта", price: "50 000 тенге" },
    { id: 8, img: <Image src={MyWorks} width={600} alt="works" priority />, title: "Дизайн сайта", price: "50 000 тенге" },
    { id: 9, img: <Image src={MyWorks} width={600} alt="works" priority />, title: "Дизайн сайта", price: "50 000 тенге" },
    { id: 10, img: <Image src={MyWorks} width={600} alt="works" priority />, title: "Дизайн сайта", price: "50 000 тенге" },
    { id: 11, img: <Image src={MyWorks} width={600} alt="works" priority />, title: "Дизайн сайта", price: "50 000 тенге" },
    { id: 12, img: <Image src={MyWorks} width={600} alt="works" priority />, title: "Дизайн сайта", price: "50 000 тенге" },
  ]
  return (
    <div>
      <div className="px-10 my-10 lg:px-32">
        <h3 className="font-semibold text-[20px] mb-10">Мой ворки</h3>
        <div className="sm:grid grid-cols-2 md:grid-cols-3 gap-4">
          {
            myWorks.map((item, index) => (
              <div key={index} className="even:hidden lg:even:block hover:border rounded-3xl hover:shadow-2xl">
                <span>{item.img}</span>
                <h3 className="font-semibold my-2 px-4">{item.title}</h3>
                <p className="text-green-500 px-4 pb-4">{item.price}</p>
              </div>
            ))
          }
        </div>
        <div className="w-full flex justify-center mt-5">
          <button className="py-2 px-8 border rounded-[50px] border-green-500 text-green-500 hover:bg-green-500 hover:text-white">Загрузить еще</button>
        </div>
      </div>
    </div>
  )
}

export default Page
