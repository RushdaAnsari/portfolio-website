import './Home.scss';



export const Home =() => {

    return (
       <>
            <div className="relative isolate px-6 pt-14 lg:px-8 tab-content">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
            </div>
            <div className="top-element"></div>
            <div className="middle-element"></div>
            <div className="bottom-element"></div>
            <div className="custom-text mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 lg:float-left sm:float-center">

              <div className="text-left text-div">
                <p className="text-lg font-bold leading-8 text-gray-600">
                  Hi,
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  I'm Rushda.
                </h1>
                <p className="mt-6 text-lg font-bold leading-8 text-gray-600">
                  Web Developer
                </p>
                <div className="mt-8 flex items-left">
                  <a
                    href="#"
                    className="rounded-md bg-[#E1688B] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#F6376C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get to know me <span aria-hidden="true">→</span>
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

