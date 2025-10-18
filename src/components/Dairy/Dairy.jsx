import React from 'react'
import CatagoryPage from '../CatagoryPage/CatagoryPage'
import bgDairy from '../../assets/Dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
        <CatagoryPage title="Dairy & Eggs" bgImage={bgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy