import './Skills.scss';
import { Container, Row, Col } from 'react-bootstrap';

// export const Skills = () => {
//     return (
//         <>
//             <div className='skill'>
//                 <Container>
//                     <Row>
//                         <Col>
//                             <div className='skill-box'>
//                                 <h2>Skills</h2>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
                   
        
         
//         </>
//     )
// }

import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section className="flex flex-col p-6 mb-12 scroll-mt-[100px] skill" id="about">
      <h1 className="text-4xl mb-4 skill">About</h1>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-4 text-lg py-4">
          <p>
            Hey there! I'm{" "}
            <span className="font-inter-bold text-accent">Cold</span>, a web
            developer.
          </p>
          <p className="max-w-lg">
            With a firm belief in the power of continuous learning, I am
            enthralled about web development and the infinite opportunities it
            presents. I continuously strive to find new challenges and prospects
            that can enhance my growth and sharpen my skills as a developer.
          </p>
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
  );
}

