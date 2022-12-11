import { Link } from "react-router-dom"

export const HeroCard = ({
    id, 
    superhero, 
    publisher, 
    alter_ego, 
    first_appareance, 
    characters
}) => {
    
    const heroImageURL = `assets/heroes/${id}.jpg`
  
    return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters">

                <div className="col-4">
                    <img src={ heroImageURL } className="card-img" alt={superhero} />
                </div>

                <div className="col-8">
                    <div className="card-body">

                        <h5 className="card-title">{ superhero }</h5>
                        <p>{ alter_ego }</p>
                        {
                            ( alter_ego !== characters ) && <p className="card-text">{ characters }</p>
                        }
                    </div>
                    <Link to={`/hero/${id}`}>
                        Mas...
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
