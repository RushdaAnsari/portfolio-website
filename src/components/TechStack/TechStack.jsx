import './TechStack.scss'

export const TechStack = () => {
    return (
    <>
    <div>
        <div className='flex mx-auto w-full justify-end items-center page-number absolute h-5 z-0'>
            <p className='flex font-bold text-[#a09881] text-[50px] px-5'>03</p>
        </div>
        <section className='tool my-3 lg:py-48 py-28' id="techstack">
            
                <h1 className="text-sm text-[#Ff3131] mb-4">Tools & Technologies</h1>
                <div className=' flex flex-wrap justify-center img-container lg:text-[13px]'>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/353884/html-5.svg'} alt="html" fluid/>
                        <span className='caption'>HTML</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/353623/css-3.svg'} alt="css"fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>CSS</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/373705/js-official.svg'} alt="js" fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>JavaScript</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt="react" fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>React</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'} alt="sass" fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>SASS</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'} alt="bootstrap" fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>Bootstrap</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/374118/tailwind.svg'} alt="bootstrap" fluid/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>TailwindCSS</span>
                    </div>
                    <div className="img-holder">
                    <img className='icon' src={'https://www.svgrepo.com/show/452077/npm.svg'} alt="npm"/>
                        <span className='caption lg:text-[13px] sm:text-[11px]'>NPM</span>
                    </div>
                
                </div>
            </section>
        </div>   
        
        
        </>
    )
}