
function Card ({title, image, description, price}) {
    return (
            <section id="card" className="card-container">
                <div className="card-item">    
                    <h2>{title}</h2>
                    <img src={image} alt={title} />
                    <p>{description}</p>
                    <p>{price}€</p>
                    <button>Order Online</button>   
                </div>
            </section>
        )
} 

export default Card;