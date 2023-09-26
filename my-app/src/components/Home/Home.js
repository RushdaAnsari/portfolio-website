import './Home.scss';



export const Home =() => {

    return (
       <>
        {/* <div class="tab-content">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> */}
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
              {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div> */}
              <div className="text-center text-div">
                <p className="mt-6 text-lg font-bold leading-8 text-gray-600">
                  Hi,
                </p>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  I'm Rushda.
                </h1>
                <p className="mt-6 text-lg font-bold leading-8 text-gray-600">
                  Web Developer
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
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
        {/* </div>
      </div>   */}

    </> 

    )



}

