

function CTAGridItem({abv, name, tagline, first_brewed, description}) {
    return (
        <div className="cta-grid-item">
            <h1>{name}</h1>
            <h3>{tagline}</h3>
            <h3>Date first brewed: {first_brewed}</h3>
            <p>Description: {description}</p>
        </div>
    )
}

export default CTAGridItem
