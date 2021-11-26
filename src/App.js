import {useState, useEffect} from 'react';
import Accordion from './Accordion';
import CTAGrid from './CTAGrid';


function App() {

  const [beers, setBeers] = useState([]);
  // const sortBeers = type =>  setBeers([...beers.sort((a,b) => a.name - b.name)]);

  const sortBeers = (type) => {
    switch(type) {
      case 'abv' :
           return setBeers([...beers.sort((a,b) => b.abv-a.abv)])
      case 'name':
         return  setBeers([...beers.sort((a,b) => a.name.localeCompare(b.name))])
         default:
             return  null
   }
  }
    useEffect( () => {
        const fetchData = async () => {
            const response = await fetch('https://api.punkapi.com/v2/beers?per_page=8');
            if (response.ok) {
                const data = await response.json();
                setBeers(data);  
            } else {
                alert('There was a problem fetching the beers, please try again later.');
            }
            
        }

        fetchData();
    }, []);


  return (
    <div className="App">
      <header>
        <h3>Cheers Beers</h3>
      </header>
      <div className="sort-container"> Sort beers by 
        <span onClick={() => sortBeers('name')}> name </span> 
        or by 
        <span onClick={() => sortBeers('abv')}> abv </span>
      </div>
      <Accordion beersArray={beers} />
      <CTAGrid beersArray={beers} />
    </div>
  );
}

export default App;
