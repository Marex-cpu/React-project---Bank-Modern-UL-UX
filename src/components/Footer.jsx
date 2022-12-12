import React from 'react';
import styles from '../styles';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants/texts';

const Footer = () => {
  return (
    <footer className={`${styles.flexStart} ${styles.paddingY} md:flex-row flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8`}>
        <div className='flex-1 flex flex-col justify-start mr-10'> 
          <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
      </div>

      <div className='flex-1 w-full flex flex-row md:justify-around justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => {
          return (
            <div key={footerLink.id} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => {
                  return (
                    <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px]
                    text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links - 1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

    </footer>
  )
}

export default Footer