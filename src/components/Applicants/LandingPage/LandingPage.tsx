import React from 'react'
import CategoryCollection from './CategoryCollection'
import CategoryHeader from './CategoryHeader'
import CTA from './CTA'
import HeaderTitle from './HeaderTitle'
import JobCollection from './JobCollection'
import JobHeader from './JobHeader'
import LandingCompany from './LandingCompany'


  function LandingPage() {



  return (
    <> 
      <HeaderTitle/>
      <LandingCompany/>
      <CategoryHeader/>
      <CategoryCollection/>
      <CTA/>
      <JobHeader/>
      <JobCollection/>
    </>
  )
}


export default LandingPage