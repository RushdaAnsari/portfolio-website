import './Projects.scss';
import calculator from '../../assets/img/calculator.JPG';
import quiz from '../../assets/img/quiz.JPG';
import sketch from '../../assets/img/sketch.JPG';
import taskflow from '../../assets/img/taskflow.JPG';
import {Card} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

export const Projects = () => {

    return(
        <>
        <div className=''>
            <div className='flex mx-auto w-full justify-end items-center page-number absolute h-5 z-0'>
                    <p className='flex text-bold text-[#a09881] text-[50px] px-5'>04</p>
            </div>
            <section id="projects" className='my-3 lg:pb-48 py-28'>

                <div className="align-center">
                    <h1 className='lh-lg'>Projects</h1>
                    <div className="container">
                        <div className="flex flex-wrap">
                    
                                <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-4">
                                    <Card className="card mb-[10px]">
                                        <img className='card-img-top' src={taskflow} alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title text-sm">Project Management Dashboard</h5>
                                            
                                            <div className='flex logo-holder justify-center mb-4'>
                                                <img className='logos flex' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt="react" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/373705/js-official.svg'} alt="js" fluid/>
                                                <img className='logos flex' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'} alt="sass" fluid/>
                                                <img className='logos flex' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'} alt="bootstrap" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/452077/npm.svg'} alt="npm"/>
                                            </div>
                                            <a href="https://rushdaansari.github.io/trello-clone/" className="btn btn-outline-success btn-sm mx-2" target='_blank'><i>Demo</i></a>
                                            <a href="https://github.com/RushdaAnsari/trello-clone" className="btn btn-outline-danger btn-sm" target='_blank'><i className='fa-brands fa-github mx-2'></i>GitHub</a>
                                        </div>
                                    </Card>
                                </div>   

                                <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-4">
                                    <Card className="card mb-[10px]">
                                        <img className='card-img-top' src={quiz}/>
                                        <div className="card-body">
                                            <h5 className="card-title other text-sm">Quiz App</h5>
                                        
                                            <div className='flex logo-holder justify-center mb-4'>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/353884/html-5.svg'} alt="html" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/353623/css-3.svg'} alt="css"fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/373705/js-official.svg'} alt="js" fluid/>
                                                <img className='logos flex' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'} alt="bootstrap" fluid/>
                                            </div>
                                            <a href="https://rushdaansari.github.io/javascript-quiz-app/" className="btn btn-outline-success btn-sm mx-2" target='_blank'><i>Demo</i></a>
                                            <a href="https://github.com/RushdaAnsari/javascript-quiz-app" className="btn btn-outline-danger btn-sm" target='_blank'><i className='fa-brands fa-github mx-2'></i>GitHub</a>
                                        </div>
                                    </Card>
                                </div>   
                            
                                <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-4">
                                    <Card className="card mb-[10px]">
                                        <img className='card-img-top' src={sketch} alt=""/>
                                        <div className="card-body">
                                            <h5 className="card-title other text-sm">Etch-a-Sketch</h5>
                                            {/* <p className="card-text">Lorem</p> */}
                                            <div className='flex logo-holder justify-center mb-4'>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/353884/html-5.svg'} alt="html" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/353623/css-3.svg'} alt="css"fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/373705/js-official.svg'} alt="js" fluid/>
                                            </div>
                                            <a href="https://rushdaansari.github.io/Etch-a-Sketch/" className="btn btn-outline-success btn-sm mx-2" target='_blank'><i>Demo</i></a>
                                            <a href="https://github.com/RushdaAnsari/Etch-a-Sketch" className="btn btn-outline-danger btn-sm" target='_blank'><i className='fa-brands fa-github mx-2'></i>GitHub</a>
                                        </div>
                                    </Card>
                                </div>   
                            
                                <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-4">
                                    <Card className="card mb-[10px]">
                                        <img className="card-img-top" src={calculator} alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title other text-sm">Calculator</h5>
                                            
                                            <div className=' flex logo-holder justify-center mb-4'>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/353884/html-5.svg'} alt="html" fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/353623/css-3.svg'} alt="css"fluid/>
                                                <img className='logos flex' src={'https://www.svgrepo.com/show/373705/js-official.svg'} alt="js" fluid/>
                                            </div>
                                            <a href="https://rushdaansari.github.io/javascript-calculator/" className="btn btn-outline-success btn-sm mx-2" target='_blank'><i>Demo</i></a>
                                            <a href="https://github.com/RushdaAnsari/javascript-calculator" className="btn btn-outline-danger btn-sm" target='_blank'><i className='fa-brands fa-github mx-2'></i>GitHub</a>
                                        </div>
                                    </Card>
                                </div>    
                            
                                
                        </div>  
                    </div>        
                </div>        
            </section> 
        </div>    

            <footer >
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