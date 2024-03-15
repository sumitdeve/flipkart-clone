import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Category from './components/category/Category'
import Banner from './components/banner/Banner'
import AxisCard from './components/axix-card/AxisCard';
import Mobiles from './components/mobiles/Mobiles';
import OfferBanner from './components/offerBaner/OfferBanner';

import offerBaner1 from './assets/offerBaner1.webp'
import offerBaner2 from './assets/offerBaner2.webp'
import offerBaner3 from './assets/offerBaner3.webp'
import offerBaner4 from './assets/offerBaner4.webp'
import offerBaner5 from './assets/offerBaner5.webp'
import offerBaner6 from './assets/offerBaner6.webp'
import Baner2 from './components/offerBaner2/Baner2';
function App() {
 
  return (
    <>
     <Navbar />
     <Category />
     <Banner />
     <AxisCard />
     <Mobiles />
     <OfferBanner banerImg1={offerBaner1}
     banerImg2={offerBaner2}
     banerImg3={offerBaner3}
      />
     <OfferBanner
     banerImg1={offerBaner4}
     banerImg2={offerBaner5}
     banerImg3={offerBaner6}
      />

     <Baner2 />


    
    </>
  )
}

export default App
