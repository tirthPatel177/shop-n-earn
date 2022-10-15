import React from "react";
import LandingHeader from "../../headers";

const LandingPage = () => {
  return (
    <div>
      <div>
        <LandingHeader />
      </div>

      <div className="flex items-center justify-center">
        <div style={{ maxWidth: "1400px" }}>
          <div className='mt-10 px-16 flex items-center justify-center'>
            <div className='flex flex-col md:flex-row items-center'>
              <div className="w-full md:w-1/2">
                <div className='text-center md:text-left'>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">An Intelligent Loyalty Club for Your Local Business</h1>
                  <p className="mt-4 text-center text-sm md:text-base md:text-left">Reward your customers, increase sales, and drive repeat business… without lifting a finger!</p>
                  <div className="flex items-center justify-center md:flex md:items-center md:justify-start">
                    <a href="https://app.finplan.io/auth/login/">
                      <p className='text-text1 font-medium text-sm md:text-base text-center rounded-md bg-primary px-3 py-2 mt-3'>
                        Get started
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex items-center justify-center'>
                <div className=''>
                  image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default LandingPage;