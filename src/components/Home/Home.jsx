import './Home.scss';
import {motion} from "framer-motion";


export const Home =() => {

    return (
       <>
       <div className='body'>
        <div className='flex mx-auto w-full justify-end items-center page-number absolute h-5 z-60 top-[115px]'>
          <p className='flex font-bold text-[#957613b3] text-[50px] px-5'>01</p>
        </div>

            <section id='home' className="flex relative isolate px-6 lg:px-8 tab-content mb-5">
                         
            <div
              className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
            </div>
            
            
            <div className="text-container sm:mx-[2px] py-18 sm:py-48 lg:float-left sm:float-center">
            

              <div className="flex-col text-left">

              <motion.div
              initial={{ x: -100 }}
              animate={{ x: 50 }}
              transition={{ ease: "easeOut", duration: 2 }}
              whileInView={{ opacity: 1, x: 0 }}
             >
                <h1 className="custom-text font-bold text-gray-600 lg:text-[95px] lg:lh-[6rem] sm:text-[4rem]">
                  Web <br/> Developer
                </h1>
               

                <div className="mt-8 flex items-left">
                  <a
                    href="mailto:iamrushdaa@gmail.com"
                    className="rounded-md btn btn-sm btn-warning text-decoration-none px-3.5 font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get in touch<span aria-hidden="true" className='text-sm'>→</span>
                  </a>
                </div>
                </motion.div> 

              </div>
              
              
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
            </div>
          </section>
      </div>
    </> 

    )



}

