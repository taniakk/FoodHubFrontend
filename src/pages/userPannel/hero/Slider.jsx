import SliderCard from "../../../components/SliderCard";

function Slider() {
    return (
        <div className="slider-container">
            <h1 className="text-5xl font-extrabold">All Products</h1>
            <div className="slider-track">
                <SliderCard />
                <SliderCard image={'/sliderimgs/product2.png'} heading="Product 1" rating={4.7} para="Description for Product 1" price="$5.00"/>
                <SliderCard image={'/sliderimgs/product3.png'} heading="Caesar Salad" rating={4.0} para="Our Caesar Salad-a symphony of crisp greens, savory croutons, and rich,
                 creamy dressing." price="$3.00"/>
                <SliderCard image={'/sliderimgs/product4.png'} heading="Israeili Couscous Salad" rating={3.5} para="Our Israeili Couscous
                Salad-a harmonious blend of flavors, textures, and Middle Eastern spices."
                 price="$12.00"/>
                {/* duplicate for seamless loop */}
                <SliderCard image={'sliderimgs/product5.png'} heading="Greek Pasta Salad" rating={5.0} para="Transport your taste
                buds to Greece with our Greek Pasta Salad a delightful fusion in salad bowl" price="$9.00" />
                <SliderCard image={'sliderimgs/product6.png'} heading="Mexican Caesar Salad" rating={5.0} 
                para="Maxican Caesar Salad is a flavorful twist on the classic Caesar, incorporating bold Mexican flavors"
                price="$14.00" />
                
            </div>
        </div>
    );
}

export default Slider;
