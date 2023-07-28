import Card from '../card/Card'
import './arrivals.css'

import cat01Img from '../../img/fashion-images/categories/cat-01.jpg'
import cat02Img from '../../img/fashion-images/categories/cat-02.jpg'
import cat03Img from '../../img/fashion-images/categories/cat-03.jpg'



const Arrivals = () => {
    return (
        <section className="arrivals">
            <div className="container">
                <div className="section-title">
                    <h2>NEW ARRIVALS</h2>
                </div>
                <div className="arrivals__cards">
                    <Card title="Hoodies & Sweetshirt" img={cat01Img} />
                    <Card title="Coats & Parkas" img={cat02Img} />
                    <Card title="Tees & T-Shirt" img={cat03Img} />
                </div>
            </div>
        </section>
    )
}

export default Arrivals;