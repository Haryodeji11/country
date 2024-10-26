import { useEffect, useState } from "react";
import Dropdown from "react-dropdown"

interface IProps {
    continentSearch: (continent: string) => void;
}

const Dropdowns: React.FC<IProps> = ({continentSearch}) => {
    const option = ["All","Africa", "America", "Europe", "Asia", "Oceania"];

    const [continent, setContinent] = useState("")
    console.log(continent, "continent");

    const continentChange= (selectedOption: any) =>{
        console.log(selectedOption);
       setContinent(selectedOption.value);
       continentSearch(selectedOption.value);
    }
  
    useEffect(()=>{
        continentSearch(continent)
    }, [continent])
    
  
  return (
    <>
    <Dropdown
     options={option} 
     value={continent}
     onChange={(selectedOption) => continentChange(selectedOption)}
     placeholder="Filter by Region"
     className="w-44 h-14 text-white p-2 bg-slate-800 "
     menuClassName="mt-6 -ml-2 w-44 h-auto text-white p-2 bg-slate-800"
     />
    </>
  )
}

export default Dropdowns