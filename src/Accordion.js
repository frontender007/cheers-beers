
import AccordionItem from './AccordionItem';


const Accordion = ({beersArray}) => {

    

    console.log(beersArray);

    const handleClick = (e) => {
        let item = e.currentTarget.querySelector('.details');
       if ( item.style.display === 'block') {
        item.style.display = 'none';
       } else {
        item.style.display = 'block';
       }
    }
    
    return (
        <div className="beer-container">
            { beersArray.map( beer => 
                <AccordionItem
                    handleClick={handleClick}
                    abv={beer.abv} 
                    name={beer.name}
                    tagline={beer.tagline}
                    first_brewed={beer.first_brewed}
                    description={beer.description} 
                    key={beer.id} 
                />
                ) 
            }
        </div>
    );
}


export default Accordion;