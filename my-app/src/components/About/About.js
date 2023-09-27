import './About.scss';
import { motion } from "framer-motion";
import Image from 'react-bootstrap/Image';

export const About = () => {
  return (
    <div>
        <section className="flex flex-col p-6 mb-12 scroll-mt-[100px]" id="about">
        <h1 className="text-4xl mb-4 py-3">About</h1>
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="about-paragraph flex flex-col gap-2 text-lg py-2 px-2">
            <p className='py-3'>
                Hi! My name is Rushda. And I am a self-taught{" "} 
                <span className="font-bold text-accent">Front-end Developer.</span> 
            </p>
            <p className="flex intro py-3 px-3">
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

