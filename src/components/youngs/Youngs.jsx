import Card from '../card/Card'
import styles from './youngs.css'

import card01Img from '../../img/fashion-images/images/promo-01.jpg'
import card02Img from '../../img/fashion-images/images/promo-02.jpg'


const Youngs = () => {
    return (
        <section className="youngs">
            <div className="container">
                <div className="section-title margin-bottom">
                    <h2>Young&rsquo;s Favourite</h2>
                </div>
                <div className="youngs__cards">
                    <Card title="Trending on&nbsp;instagram" img={card01Img} />
                    <Card title="All Under $40" img={card02Img} />
                </div>
            </div>
        </section>
    )
}

export default Youngs;