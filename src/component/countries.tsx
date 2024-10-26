import React from 'react'
import { Link } from 'react-router-dom';

interface IProps{
data: any[];
}

const Countries: React.FC<IProps> = ({data}) => {
  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-4 mt-16">
      {data.map((d, i) => (
           <Link key={d?.name} to={`/details/${d?.name}`}>
            <div key={i} className="w-56 md:w-72 h-auto m-10 bg-slate-800">
              <div className="w-full h-1/2 mb-4">
                <img
                  src={d?.flag}
                  alt="country image"
                  className="w-full h-full"
                />
              </div>
              <div className="px-4">
                <div className="text-white font-bold mb-2">{d?.name}</div>
                <div>
                  <div className="text-white">
                    Population <span>{d?.population}</span>
                  </div>
                  <div className="text-white">
                    Region: <span>{d?.region}</span>
                  </div>
                  <div className="text-white">
                    Capital: <span>{d?.capital}</span>
                  </div>
                </div>
              </div>
            </div>
           </Link>
          ))}
      </div>
    </>
  )
}

export default Countries