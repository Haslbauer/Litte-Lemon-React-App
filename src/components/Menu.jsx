import { menu } from "../data/menu";
import { useState } from "react";

export default function Menu() {
    // 1. Wir speichern NUR die gewählte Kategorie im State
    const [activeCategory, setActiveCategory] = useState("all");

    // 2. Die Filter-Logik (ausführliche Schreibweise)
    // Diese Variable wird bei jedem Klick auf einen Filter-Button neu berechnet.
    const filteredMenu = menu.filter((item) => {
        if (activeCategory === "all") {
            return true; // "Wahr" bedeutet: Das Item bleibt im Array
        }
        // Nur wenn die Kategorie des Gerichts exakt dem aktiven Filter entspricht
        return item.category === activeCategory; 
    });

    return (
        <section id="menu" className="menu-container">
            <div>
                <h1>Our Menu</h1>
                {/* Hier kommen die Filter-Buttons hin */}
                <div className="filter-buttons">
                    <button type="button" onClick={() => setActiveCategory("all")}>All</button>
                    <button type="button" onClick={() => setActiveCategory("starters")}>Starters</button>
                    <button type="button" onClick={() => setActiveCategory("mains")}>Mains</button>
                    <button type="button" onClick={() => setActiveCategory("desserts")}>Desserts</button>
                </div>
            </div>

            <div className="menu-grid">
                {filteredMenu.map((item) => (
                    <div key={item.id} className="menu-card">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p className="price">{item.price}€</p>
                    </div>
                ))}
            </div>
        </section>
    );
}