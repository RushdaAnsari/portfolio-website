import './TechStack.scss'

export const TechStack = () => {
    return (
        <>
        <div className='tool'>
                <h1 className="text-4xl mb-4">Tools</h1>
                <div className=' flex justify-center img-container'>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/353884/html-5.svg'} alt="html" fluid/>
                        <span>HTML</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/353623/css-3.svg'} alt="css"fluid/>
                        <span>CSS</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/373705/js-official.svg'} alt="js" fluid/>
                        <span>JavaScript</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt="react" fluid/>
                        <span>React</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'} alt="sass" fluid/>
                        <span>SASS</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'} alt="bootstrap" fluid/>
                        <span>Bootstrap</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/374118/tailwind.svg'} alt="bootstrap" fluid/>
                        <span>TailwindCSS</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/452077/npm.svg'} alt="npm"/>
                        <span>NPM</span>
                    </div>
                
                </div>
            </div>
        
        
        </>
    )
}