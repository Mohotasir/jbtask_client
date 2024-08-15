
import img from '../../../public/hero1.svg'
import img1 from '../../../public/anim1.webp'
export default function Hero() {
  return (
    <div className='max-w-screen-2xl mx-12 flex'>
         <div className="lg:w-3/4 bg-green-50 flex items-center gap-4  rounded-md p-3">
              <img className='w-1/4' src={img} alt="" />
              <div>
              <h3 className='font-thin text-2xl clr'>Welcome to shop !</h3>
              <h1 className='text-3xl lg:text-5xl font-bold uppercase text-gray-500'>choose your desire <br></br> product.</h1>
              </div>
         </div>
         <div className="lg:w-1/4 rounded-lg">
                <img src={img1} alt="" />
         </div>
    </div>
  )
}
