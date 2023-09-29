import './Home.scss';



export const Home =() => {

    return (
       <>
            <div id='home' className="flex relative isolate px-6 lg:px-8 tab-content">
                         
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
            </div>
            
            
            <div className="text-container lg:mx-[100px] sm:mx-[2px] py-28 sm:py-48 lg:py-56 lg:float-left sm:float-center">
            
              <div className="text-left">
                <h1 className="custom-text font-bold text-gray-600 text-4xl sm:text-6xl lg:text-[100px] lg:leading-[6rem]">
                  Web <br/> Developer
                </h1>
                {/* <h1 id="name" className="mt-1 font-bold tracking-tight text-gray-900 sm:text-6xl">
                  
                </h1> */}
                {/* <p className="mt-6 text-lg font-bold leading-8 text-gray-600">
                 
                </p> */}
                <div className="mt-8 flex items-left">
                  <a
                    href="mailto:iamrushdaa@gmail.com"
                    className="rounded-md btn btn-warning text-decoration-none px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get in touch<span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              
              
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
            </div>
          </div>
          
    </> 

    )



}

