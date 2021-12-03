import React,{ useState,useEffect} from 'react';
import './App.css';
import InfoBox from './InfoBox';
import { FormControl,MenuItem,Select,Card,CardContent } from '@material-ui/core'
import Map from './Map'

function App() {
  
  const [countries,setCountries] = useState([]);
  const [country,setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data)=>{
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));
        setCountries(countries);

      });
    };
    getCountriesData();
  }, [countries])
    
   const onCountryChange = (event) => {
     const countryCode = event.target.value;
     setCountry(countryCode);
   };

  return (
    <div className="app">
      <div className="app__left">
          <div className="app__header">
          <h1>COVID 19 Tracker</h1>
            <FormControl className="app__dropdown">
              <Select variant="outlined" value={country} onChange={onCountryChange}>
                  <MenuItem value="worldwide">Worldwide</MenuItem>
                    
                  {
                    countries.map((country) => (
                      <MenuItem value={country.value}>{country.name}</MenuItem>
                    ))
                  }
              </Select>
            </FormControl>
          </div>
          
          <div className= "app__stats">
            <InfoBox title="Coronavirus Cases" total={2000} cases={123}/>
            <InfoBox title="Recovered" total={2000} cases={1234}/>
            <InfoBox title="Deaths" total={4000} cases={12345}/>
          </div>
            <Map />
      </div>
      <Card className="app__right"> 
      <CardContent>
      <h3>Live Cases by Country</h3>
           {/* Table */}
           <h3>Worldwide new Cases</h3>
            {/* Graph */}
      </CardContent>       
           
      </Card>
    </div>
  );
}

export default App;
