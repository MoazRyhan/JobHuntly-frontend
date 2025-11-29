import React from 'react'
import CategoryCollection from './CategoryCollection'
import CategoryHeader from './CategoryHeader'
import CTA from './CTA'
import HeaderTitle from './HeaderTitle'
import LandingCompany from './LandingCompany'


  function LandingPage() {



  return (
    <> 
      <HeaderTitle/>
      <LandingCompany/>
      <CategoryHeader/>
      <CategoryCollection/>
      <CTA/>
    </>
  )
}


export default LandingPage