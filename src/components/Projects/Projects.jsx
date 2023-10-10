import './Projects.scss';
import portfolio from '../../assets/img/portfolio.JPG';
import weather from '../../assets/img/weather-app.JPG';
import sketch from '../../assets/img/sketch.JPG';
import taskflow from '../../assets/img/trello-clone-capture.JPG';
import {Card} from 'react-bootstrap';
import { motion } from "framer-motion";
import 'font-awesome/css/font-awesome.min.css';

export const Projects = () => {

    
    return(
        <>
        <div>
            <div className='flex mx-auto w-full justify-end items-center page-number absolute h-5 z-0'>
                    <p className='flex font-bold text-[#a09881] text-[50px] px-5'>04</p>
            </div>
            <section className='my-3 lg:pb-54 py-28 bg-[#fffaf0]' id="projects">

                <div className="align-center">
                    <h1 className='lh-lg text-sm text-[#ff316b] pb-5 font-bold'>Projects</h1>
                    <div className="container">
                        <div className="flex flex-wrap">
                    
                                
                                <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-4">

                                    <motion.div
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{
                                      scale: 1.2,
                                      transition: { duration: 0.5 },
                                    }}
                                    
                                    whileInView={{ opacity: 1 }}
                                    
                                    
                                    >
                                    <Card className="card mb-[10px]">
                                        <img className='card-img-top' src={taskflow} alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title font-bold">Trello Clone</h5>
                                            
                                            <div className='flex logo-holder justify-center mb-4'>
                                                <img className='logos flex' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt="react" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/373705/js-official.svg'} alt="js" fluid/>
                                                <img className='logos flex' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'} alt="sass" fluid/>
                                                <img className='logos flex' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'} alt="bootstrap" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/452077/npm.svg'} alt="npm"/>
                                            </div>
                                            <a href="https://rushdaansari.github.io/trello-clone/" className="btn btn-outline-secondary btn-sm mx-1" target='_blank'><i>Demo</i></a>
                                            <a href="https://github.com/RushdaAnsari/trello-clone" className="btn btn-success btn-sm" target='_blank'><i className='fa-brands fa-github mx-1'></i>GitHub</a>
                                        </div>
                                    </Card>
                                    </motion.div> 

                                </div>   
                                

                                
                                <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-4">
                                    <motion.div
                                        initial={{ opacity: 0.6 }}
                                        whileHover={{
                                        scale: 1.2,
                                        transition: { duration: 0.5 },
                                        }}
                                        whileInView={{ opacity: 1 }}
                                        >
                                    <Card className="card mb-[10px]">
                                        <img className='card-img-top' src={weather}/>
                                        <div className="card-body">
                                            <h5 className="card-title other font-bold">Weather App</h5>
                                        
                                            <div className='flex logo-holder justify-center mb-4'>
                                                <img className='logos flex' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt="react" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/373705/js-official.svg'} alt="js" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/445780/framer.svg'} alt="framer" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/452077/npm.svg'} alt="npm"/>
                                            </div>
                                            <a href="https://rushdaansari.github.io/react-weather-app/" className="btn btn-outline-secondary btn-sm mx-1" target='_blank'><i>Demo</i></a>
                                            <a href="https://github.com/RushdaAnsari/react-weather-app" className="btn btn-success btn-sm" target='_blank'><i className='fa-brands fa-github mx-1'></i>GitHub</a>
                                        </div>
                                    </Card>
                                    </motion.div>
                                </div>   

                                <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-4">
                                <motion.div
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{
                                      scale: 1.2,
                                      transition: { duration: 0.5 },
                                    }}
                                    
                                    whileInView={{ opacity: 1 }}
                                    >
                                    <Card className="card mb-[10px]">
                                        <img className="card-img-top" src={portfolio} alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title other font-bold">Portfolio Website</h5>
                                            
                                            <div className=' flex logo-holder justify-center mb-4'>
                                                <img className='logos flex' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt="react" fluid/>
                                                <img className='logos flex' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'} alt="sass" fluid/>
                                                <img className='logos flex' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'} alt="bootstrap" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/374118/tailwind.svg'} alt="tailwindCSS" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/445780/framer.svg'} alt="framer" fluid/>
                                                
                                            </div>
                                            {/* <a href="" className="btn btn-outline-secondary btn-sm mx-1" target='_blank'><i>Demo</i></a> */}
                                            <a href="https://github.com/RushdaAnsari/portfolio-website" className="btn btn-success btn-sm" target='_blank'><i className='fa-brands fa-github mx-1'></i>GitHub</a>
                                        </div>
                                    </Card>
                                </motion.div>
                                </div>    
                            
                                <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-4">
                                <motion.div
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{
                                      scale: 1.2,
                                      transition: { duration: 0.5 },
                                    }}
                                   
                                    whileInView={{ opacity: 1 }}
                                    >
                                    <Card className="card mb-[10px]">
                                        <img className='card-img-top' src={sketch} alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title other font-bold">Etch-a-Sketch</h5>
                                            {/* <p className="card-text">Lorem</p> */}
                                            <div className='flex logo-holder justify-center mb-4'>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/353884/html-5.svg'} alt="html" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/353623/css-3.svg'} alt="css"fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/373705/js-official.svg'} alt="js" fluid/>
                                            </div>
                                            <a href="https://rushdaansari.github.io/Etch-a-Sketch/" className="btn btn-outline-secondary btn-sm mx-1" target='_blank'><i>Demo</i></a>
                                            <a href="https://github.com/RushdaAnsari/Etch-a-Sketch" className="btn btn-success btn-sm" target='_blank'><i className='fa-brands fa-github mx-1'></i>GitHub</a>
                                        </div>
                                    </Card>
                                    </motion.div>
                                </div>   
                            
                                
                            
                                
                        </div>  
                    </div>        
                </div>        
            </section> 
        </div>    

            <footer className='text-sm font-bold'>
                <p>Copyright ©
                <script>document.write(new Date().getFullYear())</script>2023
                RushdaAnsari
                <a href="https://github.com/RushdaAnsari">
                    <i id="icon" class="fa-brands fa-github"></i>
                </a>
                </p>
            </footer>                
        
                        
        
        </>
    )
}