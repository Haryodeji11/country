import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

interface IProps {
 country: any;
}
const CountriesDetails: React.FC<IProps> = ({country}) => {
  const { countryName } = useParams<{ countryName: string }>();
  const selectedCountry = country.find((c: any) => c?.name === countryName);
  return (
    <>
    <div className='w-full min-h-screen bg-slate-900'>
    <div className="w-full h-20 bg-slate-800 px-8 py-4 flex items-center justify-between">
      <div className="text-xl text-white">Where in the World?</div>
      <div className="text-xl text-white">Dark Mode</div>
    </div>

    <div>
      <Link to="/" ><div className='w-20 h-10 flex items-center justify-center text-white ml-20 mt-10 bg-slate-800'>Back</div></Link>
    </div>

    {!selectedCountry ? (
      <>
      <div>No countries is Selected</div>
      </>
    ): (
      <>
      <div className='w-full border border-red-500 flex items-center justify-around text-white p-4 mt-20 '>

      <div className="w-full h-1/2 mb-4">
        <img
          src={selectedCountry?.flag}
          alt="country image"
          className="w-full h-full"
        />
      </div>
        <div className='w-[60%] h-full'>
        <div>Country Name</div>
        <div>
        <div>
          <div>Native: <span>{selectedCountry?.name}</span></div>
          <div>Population: <span>{selectedCountry?.population}</span></div>
          <div>Region: <span>{selectedCountry?.region}</span></div>
          <div>Sub Region: <span>{selectedCountry?.subregion}</span></div>
          <div>Capital: <span>{selectedCountry?.capital}</span></div>
        </div>

        <div>
          <div>Top Level Domain: <span>{selectedCountry?.topLevelDomain}</span></div>
          <div>Currencies: <span>{selectedCountry?.currencies}</span></div>
          <div className='mt-10'>Languages: <span>{selectedCountry?.Languages}</span></div>
        </div>
        </div>
        </div>

        </div>
      </>
    )}
    </div>
    </>
  )
}

export default CountriesDetails