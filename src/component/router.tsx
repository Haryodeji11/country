import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import CountriesDetails from './countriesdetails'
import data from "../data.json"

interface IProps{

}

const AppRouter: React.FC<IProps> = () => {
  const countryData = {data};
  return (
    
   <>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/details/:countryName' element={<CountriesDetails country={countryData} />} />
    </Routes>
   </>
  )
}

export default AppRouter