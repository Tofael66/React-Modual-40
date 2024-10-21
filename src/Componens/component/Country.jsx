// modual-40.1-40.5

import { useState } from 'react';
import './country.css'
import CountryDetails from '../countryDetails/CountryDetails';




const Country = ({country , handleVositedCountry , handleVisitedFlags}) => {
 //console.log(country) ;
const {name , flags, area, population , cca3} = country ;


const [ visited, setVisited] = useState(false) ;


const handleVisited = () => {
    setVisited(!visited) ;
}


// Modual-40.6
// console.log(handleVositedCountry) ;

// const passWithParams = () => 
//     handleVositedCountry(country)







    return (

        <div className={`country ${visited ? "visited" : "non-visited"}`}>
             <h4 style={{color: visited ? 'yellow' : 'red'}} > {name.common} </h4>
            <img src={flags.png}  />
        
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>

            <button onClick={() => handleVositedCountry(country)}>Mark visited</button>
            <br />

            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add visited</button>

            <br />

            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>

            {
                visited ?  ' I visited' : 'No visited'
            }






         {/* Modual-40.8 */}
   <hr />

< CountryDetails 

country={country}  handleVositedCountry={ handleVositedCountry}  handleVisitedFlags={handleVisitedFlags}

></CountryDetails>
           
        </div>
    );
};

export default Country;