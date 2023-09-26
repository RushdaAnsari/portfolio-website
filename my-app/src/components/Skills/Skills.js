import './Skills.scss';
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <div>
        <section className="flex flex-col p-6 mb-12 scroll-mt-[100px] skill" id="about">
        <h1 className="text-4xl mb-4">About</h1>
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col gap-4 text-lg py-4">
            <p>
                Hey there! I'm{" "}
                <span className="font-bold text-accent">Rushda</span>, a web developer.
            </p>
            <p className="flex about">
                With a firm belief in the power of continuous learning, I am
                enthralled about web development and the infinite opportunities it
                presents. I continuously strive to find new challenges and prospects
                that can enhance my growth and sharpen my skills as a developer.
            </p>
            </div>
            <div className='tool'>
                <h1 className="text-4xl mb-1">Tools</h1>
                <div className=' flex justify-center img-container'>
                    <img src={''} alt="js"/>
                    <img src={''} alt="react"/>
                    <img src={''} alt="sass"/>
                    <img src={''} alt="tailwindcss"/>
                    <img src={''} alt="html"/>
                    <img src={''} alt="css"/>
                    <img src={''} alt="npm"/>
                    <img src={''} alt="bootstrap"/>
                </div>
            </div>
            
            
            
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* <TechStack /> */}
        </motion.div>
        </section>
    </div>
    
  );
}

