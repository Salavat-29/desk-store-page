import './brands.css'
import hm from './../../img/fashion-images/brands/HM.png' 
import obey from './../../img/fashion-images/brands/Obey.png' 
import shopify from './../../img/fashion-images/brands/Shopify.png' 
import lacoste from './../../img/fashion-images/brands/Lacoste.png' 
import levis from './../../img/fashion-images/brands/Levis.png' 
import amazon from './../../img/fashion-images/brands/Amazon.png' 


function Brands () {
    return (
        <section className="brands">
            <div className="container">
                <ul className="brands-list">
                    <li><a href="#!"><img src={hm} alt="logo H&M" /></a></li>
                    <li><a href="#!"><img src={obey} alt="logo Obey" /></a></li>
                    <li><a href="#!"><img src={shopify} alt="logo Shopify" /></a></li>
                    <li><a href="#!"><img src={lacoste} alt="logo Lacoste" /></a></li>
                    <li><a href="#!"><img src={levis} alt="logo Levis" /></a></li>
                    <li><a href="#!"><img src={amazon} alt="logo Amazon" /></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Brands;