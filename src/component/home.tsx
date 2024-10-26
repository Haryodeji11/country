import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import data from "../data.json"
import SearchIcon from '../assets/search';
import Countries from './countries';
import Dropdowns from './dropdown';
import { Link } from 'react-router-dom';

const Home = () => {
    const [searchFilter, setSearchFilter] = useState<string | undefined>()
    const [filteredData, setFilteredData] = useState<any[]>([]);
    console.log(data.length);
  
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchFilter(e.target.value);
    }
  
    const [mode, setMode] = useState<{color: "bg-slate-900" | "white"}>({
      color: "bg-slate-900"
    });
    const countrySearch = (country: string)=>{
      const filteredCountries = data.filter((c) => c && c.name && c.name.includes(country) ||  c.region.includes(country));
    console.log(filteredCountries, "filtered countries")
    setFilteredData(filteredCountries);
    };
  
    const continentSearch = (continent: string) =>{
      console.log(continent);
      if(continent === "All"){
        setFilteredData(data)
      } else{
      const filteredContinent = data.filter((c)=> c && c?.region && c.region.includes(continent));
      setFilteredData(filteredContinent);
      }
    }
  
    useEffect(()=>{
      if(!searchFilter){
         setFilteredData(data);
      } else if (searchFilter && searchFilter.trim() === "") {
        setFilteredData(data);
      } else {
        countrySearch(searchFilter as string);
      }
    },[searchFilter]);
  return (
    <>
     <div className="w-screen h-auto bg-slate-900">

<div className="w-full h-20 bg-slate-800 px-8 py-4 flex items-center justify-between">
  <div className="text-xl text-white">Where in the World?</div>
  <div 
  className="text-xl text-white"
  onClick={()=> setMode({color: "white"})}
  >Dark Mode</div>
</div>

<div className="flex items-center justify-between p-2 md:p-4">
  <div className="ml-10 px-4 flex items-center">
      <div>
        <input type="text"
        placeholder="Enter Search Country or region"
        className="bg-slate-800 text-white p-2 w-72 h-14"
        value={searchFilter}
        onChange={handleSearchChange}
          />
      </div>
      <div className="-ml-9 mt-2">
      <SearchIcon />
      </div>
    </div>
  <div>
</div>
<div className="mr-20">
<Dropdowns continentSearch={continentSearch}  />
</div>
</div>
<Countries data={filteredData} />
</div>
    </>
  )
}

export default Home