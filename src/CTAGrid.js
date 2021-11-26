import CTAGridItem from "./CTAGridItem"

function CTAGrid({beersArray}) {
    return (
        <div className="cta-grid">
            { beersArray.map (beer => {
                return (
                    <CTAGridItem
                    abv={beer.abv} 
                    name={beer.name}
                    tagline={beer.tagline}
                    first_brewed={beer.first_brewed}
                    description={beer.description} 
                    key={beer.id} 
                />
                )
            }) }
        </div>
    )
}

export default CTAGrid
