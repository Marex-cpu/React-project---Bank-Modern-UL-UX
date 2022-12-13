import React from 'react';
import styles from './styles';

import { Navbar, Billing, Business, CardDeal, CTA, Clients, Footer, Hero, Stats, Testimonials } from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>

      {/* nav-bar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

       {/* hero-section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div> 

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div> 
    </div>
  )
}

export default App