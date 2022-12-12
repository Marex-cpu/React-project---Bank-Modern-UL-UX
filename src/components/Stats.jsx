import React from 'react';
import styles from '../styles';
import { stats } from '../constants/texts';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap md:mb-20 mb-0`}>
      {stats.map((stat) => {
        return (
          <div key={stat.id} className={`flex flex-1 justify-center items-center flex-row  m-2`}>
            <h4 className='font-poppins font-semibold md:text-[40px] sm:text-[30px] text-[25px] md:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
            <p className='font-poppins font-noraml md:text-[20px] sm:text-[16px] text-[14px] md:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Stats