import './TechStack.scss'

export const TechStack = () => {
    return (
        <>
        <div className='tool' id="techstack">
                <h1 className="text-4xl mb-4 py-3">Tools & Technologies</h1>
                <div className=' flex flex-wrap justify-center img-container'>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/353884/html-5.svg'} alt="html" fluid/>
                        <span className='caption'>HTML</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/353623/css-3.svg'} alt="css"fluid/>
                        <span className='caption'>CSS</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/373705/js-official.svg'} alt="js" fluid/>
                        <span className='caption'>JavaScript</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt="react" fluid/>
                        <span className='caption'>React</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'} alt="sass" fluid/>
                        <span className='caption'>SASS</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'} alt="bootstrap" fluid/>
                        <span className='caption'>Bootstrap</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/374118/tailwind.svg'} alt="bootstrap" fluid/>
                        <span className='caption'>TailwindCSS</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/452077/npm.svg'} alt="npm"/>
                        <span className='caption'>NPM</span>
                    </div>
                
                </div>
            </div>
        
        
        </>
    )
}