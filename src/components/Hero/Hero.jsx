
import img from '../../../public/hero1.svg'
import img1 from '../../../public/anim1.webp'
//import img2 from '../../../public/anim2.gif'
export default function Hero() {
  return (
    <div className='max-w-screen-2xl flex flex-col md:flex-row'>
         <div className="lg:w-3/4 bg-green-50 flex flex-col lg:flex-row items-center gap-4  rounded-md p-3">
              <img className='lg:w-1/4 w-2/3' src={img} alt="" />
              <div>
              <h3 className='font-thin text-2xl clr'>Welcome to shop !</h3>
              <h1 className='text-3xl lg:text-5xl font-bold uppercase text-gray-500'>choose your desire <br></br> product.</h1>
              </div>
         </div>
         <div className="lg:w-1/4  rounded-lg">
                <div className=''>
                <img className='hidden md:flex' src={img1} alt="" />
                </div>
         </div>
    </div>
  )
}
