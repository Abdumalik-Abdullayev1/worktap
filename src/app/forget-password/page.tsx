import Image from 'next/image';
import Link from 'next/link';
import SignUp from '@/assets/Sign-up.svg';



const Page = () => {

    return (
        <div className='w-screen h-screen lg:flex lg:items-center'>
            <div className='h-screen flex flex-col justify-center lg:w-[50%] lg:px-32'>
                <div className="px-10 mt-5">
                    <p>Мы отправим Вам код для восстановления пароля</p>
                    <h2 className="font-bold text-3xl">Заполните поле ниже</h2>
                </div>
                <div className="px-10 mt-5">
                    <form id='submit'>
                        <p>E-mail</p>
                        <input
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            className="border-b-2 outline-none w-full p-2 mb-1"
                        />
                        <p>Код</p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Код из почты"
                            className="border-b-2 outline-none w-full p-2 mb-1"
                        />
                    </form>
                </div>
                <div className="flex flex-col items-center px-10 mt-5 gap-3">
                    <Link href='/new-password' className="w-full text-center bg-green-600 text-slate-200 px-[30px] py-[10px] rounded-[50px]">
                        <button
                            type="submit"
                            form='submit'
                        >
                            Отправить код
                        </button>
                    </Link>
                    <p>
                        Вспомнили пароль?
                        <Link href="/" className="text-[rgb(251,164,87)]">
                            Войдите
                        </Link>
                    </p>
                </div>
            </div>
            <div className='hidden lg:block'>
                <Image src={SignUp} width={580} alt='SignUp' priority />
            </div>
        </div>
    );
};

export default Page;
