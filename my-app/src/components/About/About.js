import './About.scss';
import { motion } from "framer-motion";
import Image from 'react-bootstrap/Image';

export const About = () => {
  return (
    <div>
        <section className="flex flex-col p-6 mb-12 scroll-mt-[100px]" id="about">
        <h1 className="text-4xl mb-4">About</h1>
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="about-paragraph flex flex-col gap-4 text-lg py-4">
            <p>
                Hey there! I'm{" "}
                <span className="font-bold text-accent">Rushda</span>, a web developer.
            </p>
            <p className="flex intro">
            I am a Front-end Developer that enjoys working with JavaScript technologies. 
            I am currently learning everything I can about web development. Exploring new technologies, 
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

