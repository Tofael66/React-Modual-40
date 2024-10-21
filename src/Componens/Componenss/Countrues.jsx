

// Modual-4.1-40.5

import { useEffect } from "react";
import { useState } from "react";
import Country from "../component/Country";
import './countr0es.css'





const Countries = () => {

 const [ country, setCountry]  = useState([]) ;

const [visitedCountry, setVisitedCountry] = useState([]) ;
const [visitedFlags, setVisitedFlags] = useState([]) ;




useEffect(() =>{
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => setCountry(data))
}, [])




const handleVositedCountry =(country )=>{
    console.log('add this visited country')
    // console.log(country)
   const newVisitedCountry =[...visitedCountry, country] ;
   setVisitedCountry(newVisitedCountry)

}



const handleVisitedFlags = flags =>{
     /// console.log('flag Adding')

     const newVisitedFlags = [...visitedFlags, flags] 
     setVisitedFlags(newVisitedFlags) ;
}




    return (

        
        <div >
           
            <h2>Country:{country.length}</h2>

             {/* visited country */}

            <div> 
                <h4>Visited country: {visitedCountry.length}</h4>
                <ul>
                    {
                 visitedCountry.map(country => <li key={country.cca3} >  {country.name.common}</li>)

                    }

                </ul>
            </div>


          <div className="flags-container">

{

    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)

}
          </div>




           {/* display country */}

<div className="container">
               
 {
country.map(country => <Country key={country.cca3} handleVositedCountry={handleVositedCountry}  handleVisitedFlags={handleVisitedFlags}  country={country}></Country>)

 }
</div>
        </div>
    );
};

export default Countries;