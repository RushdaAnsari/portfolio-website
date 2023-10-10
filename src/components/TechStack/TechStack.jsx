import './TechStack.scss'
import React from 'react';
import { motion } from 'framer-motion';

export const TechStack = () => {
    return (
    <>
    <div>
        <div className='flex mx-auto w-full justify-end items-center page-number absolute h-5 z-0'>
            <p className='flex font-bold text-[#957613b3] text-[50px] px-5'>03</p>
        </div>
        <section className='tool my-3 lg:pb-54' id="techstack">
            
                <h1 className="text-sm text-[#ff316b] mb-4 font-bold">Tools & Technologies</h1>
                <div className=' flex flex-wrap justify-center img-container lg:text-[13px]'>

                <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.35}}
                whileInView={{opacity: 1}}
                
                >
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/353884/html-5.svg'} alt="html" fluid/>
                        <span className='caption'>HTML</span>
                    </div>

                </motion.div>
                
                <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.30}}
                whileInView={{ opacity: 1}}
               
                >
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/353623/css-3.svg'} alt="css"fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>CSS</span>
                    </div>
                </motion.div>    

                <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.25}}
                whileInView={{ opacity: 1 }}
                
                >
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/373705/js-official.svg'} alt="js" fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>JavaScript</span>
                    </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.20}}
                whileInView={{ opacity: 1 }}
                
                > 
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt="react" fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>React</span>
                    </div>
                </motion.div>     
                <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.15}}
                whileInView={{ opacity: 1 }}
                
                >
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'} alt="sass" fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>SASS</span>
                    </div>
                    </motion.div> 
                <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.10}}
                whileInView={{ opacity: 1 }}
                
                >
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'} alt="bootstrap" fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>Bootstrap</span>
                    </div>
                </motion.div> 
                <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.0}}
                whileInView={{ opacity: 1 }}
               
                >
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/374118/tailwind.svg'} alt="bootstrap" fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>TailwindCSS</span>
                    </div>
                </motion.div> 
                <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.0}}
                whileInView={{ opacity: 1 }}
               
                >
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/445780/framer.svg'} alt="Framer-Motion" fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>Framer-Motion</span>
                    </div>
                </motion.div> 
                <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 2, delay: 0.0}}
                whileInView={{ opacity: 1 }}
                
                >
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/452077/npm.svg'} alt="npm"/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>NPM</span>
                    </div>
                </motion.div> 
                
                </div>
            </section>
        </div>   
        
        
        </>
    )
}