import './About.scss';
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className=''>
        <div className='flex mx-auto w-full justify-end items-center page-number absolute h-5 z-0'>
            <p className='flex font-bold text-[#a09881] text-[50px] px-5'>02</p>
        </div>
        <section className="flex flex-col lg:py-48 py-28 bg-[#fffaf0]" id="about">

            

            <h1 className="text-sm text-[#Ff3131] mb-4">About</h1>
            
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="about-paragraph relative mx-auto flex flex-col gap-2 lg:text-base sm:text-sm px-2 w-[60%]">
                <p className='lh-base'>
                    Welcome, My name is {" "}
                    <span className="font-bold text-accent">Rushda.</span> 
                </p>
                <p className="flex intro px-3">
                I am a self-taught front-end developer.
                I enjoy working with JavaScript technologies. 
                Currently I am learning everything I can about web development. Exploring new technologies, 
                which I can use to create incredible websites, is a passion of mine.
                </p>
                </div>
                    
                
            </motion.div>

        {/* <motion.div
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
        </motion.div> */}

        </section>
    </div>
    
  );
}

