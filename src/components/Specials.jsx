import Card from "./Card"
import { menu } from "../data/menu";

const specials = menu.filter(item => item.isSpecial);

export default function Specials () {
    return (
        <section id="specials" className="specials-container">
            <div>
                <h1>This week`s specials</h1>
            </div>
            <div className="specials-item">
                {specials.map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            image={item.image}                          
                            description={item.description}
                            price={item.price}
                            />
                        )
                    )
                }   
            </div>
        </section>
        
        
    )
}
