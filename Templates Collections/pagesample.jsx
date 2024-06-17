/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nykGx7ofteO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { FaArrowRightLong } from "react-icons/fa6";

export default function Component() {
  return (
    <div className="bg-white">
     <div className='w-11/12 lg:w-4/5 mx-auto'>
        <div className='text-center mx-auto'>
            <p className='font-semibold text-4xl lg:text-5xl'>It’s not or. It’s and.</p>
            <p className='sm:text-xl md:text-2xl my-6 md:mt-14 mt-12'>Choosing a customer communication solution is hard — but with Front, it’s not. Front is the only inbox built for collaboration, visibility, and efficiency at scale.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            
                <video src="https://front.com/assets/features/workload-balancing.mp4" className='rounded-2xl sm:mt-14 z-30'></video>
            
            <div className='flex flex-col justify-center align-center sm:p-8 p-2 gap-y-2 '>
                <p className='font-bold text-xl sm:text-2xl text-center lg:text-left lg:text-2xl'>Automation and attention</p>
                <p className='py-2 text-md md:text-xl  text-center lg:text-left'>Front automatically aggregates & routes customer conversations from your channels, ensuring every message gets to the right person.</p>
                <a href='#' className='font-medium text-center lg:text-left flex mx-auto lg:mx-0'>Learn More <span className='ml-2 lg:ml-3 mt-1 lg:mt-2'><FaArrowRightLong/></span></a> 
            </div>
            
                <video src="https://front.com/assets/features/teams-in-lockstep.mp4" className='rounded-2xl sm:mt-14 z-30'></video>
            
            <div className='flex flex-col justify-center align-center sm:p-8 p-2 gap-y-2 '>
                <p className='font-bold text-xl sm:text-2xl text-center lg:text-left lg:text-2xl'>Speed and personalization</p>
                <p className='py-2 text-md md:text-xl  text-center lg:text-left'>With Front, personalization doesn’t slow teams down. Every conversation is surrounded by customer history, relevant data, and built-in collaboration so teams can work behind the scenes to craft better responses, faster.</p>
                <a href="#" className='font-medium text-center lg:text-left flex mx-auto lg:mx-0'>Learn More <span className='ml-2 lg:ml-3 mt-1 lg:mt-2'><FaArrowRightLong/></span></a>
            </div>
            
                <video src="https://front.com/assets/features/customer-satisfaction.mp4" className='rounded-2xl sm:mt-14 z-30'></video>
            
            <div className='flex flex-col justify-center align-center sm:p-8 p-2 gap-y-2 lg:text-left'>
                <p className='font-bold text-xl sm:text-2xl text-center lg:text-left lg:text-2xl'>Measure customer happiness and team performance</p>
                <p className='py-2 text-md md:text-xl  text-center lg:text-left'>You can’t improve what you can’t measure. With a new kind of visibility into both customer experience and team efficiency, you’re always a click away from a complete, 360° view of business impact.</p>
                <a href="#" className='font-medium text-center lg:text-left flex mx-auto lg:mx-0'>Learn More <span className='ml-2 lg:ml-3 mt-1 lg:mt-2'><FaArrowRightLong/></span></a>
            </div>
        </div>
    </div>
    </div>
  )
}

