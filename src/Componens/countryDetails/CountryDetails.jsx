
import CountryDta from "../countryData/CountryDta";


// Modual-40.8 



const CountryDetails = ({country, handleVositedCountry , handleVisitedFlags}) => {
console.log(country)
console.log(handleVositedCountry)

    return (
        <div>
            <h2> Country Details :</h2>

            <hr />
       
<CountryDta
country ={country}

></CountryDta>
      
        </div>
    );
};

export default CountryDetails;