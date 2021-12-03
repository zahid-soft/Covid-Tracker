import React,{ useState} from 'react';
import './App.css';
import { FormControl,MenuItem,Select } from '@material-ui/core'

function App() {
  
  const [countries,setCountries] = useState(['uk','us','ind'])


  return (
    <div className="App">
    <div className="app__header">
    <h1>COVID 19 Tracker</h1>
       <FormControl className="app__dropdown">
         <Select variant="outlined">
         {
           countries.map((country) => (
             <MenuItem value={country}>{country}</MenuItem>
           ))
         }
             

         </Select>
       </FormControl>
    </div>
     
       {/* Header */}
       {/* Title + Select Input deopDown field */}

       {/* InfoBoxe */}
       {/* InfoBoxe */}
       {/* InfoBoxe */}

       {/* Table */}
       {/* Graph */}

       {/* Map */}
    </div>
  );
}

export default App;
