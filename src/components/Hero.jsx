import React from 'react';
import styles from '../styles';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      {/* left-content */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] ss:px-4 px-2 bg-discount-gradient sm:rounded-[10px] rounded-[5px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} text-[14px]`}>   
            <span className='text-white'> 20% </span>
            Discount For 
            <span className='text-white'> 1 Month </span>
            Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <div className='flex-1 font-poppins font-semibold ss:text-[72px] text-[45px] text-white ss:leading-[100px] leading-[65px]'>
            <div className='flex flex-row justify-between items-center w-full'>
              <div>
                <h1>The Next</h1>
              <span className='text-gradient'> Generation </span>
              </div>
              <div className='ss:flex hidden md:mr-4 mr-0'>
                <GetStarted/>
              </div>
            </div>
            Payment Method
          </div>    
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.
        </p>
      </div>

      {/* right-content */}
      <div className={`flex-1 flex  md:my-0 my-5 relative`}>
        <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero