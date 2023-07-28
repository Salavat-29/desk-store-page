import './promo.css'
import promoImg from './../../img/fashion-images/images/header-img.jpg'


const Promo = () => {
    return (
    <section className="promo">
        <div className="container">
            <div className="promo-content">
                <div className="promo-text">
                    <div className="promo-title">
                        <span className='highlight'> 
                            <span>LET&rsquo;S</span>
                        </span>
                         EXPLORE 
                         <span className='highlight highlight--yellow'>
                            <span>UNIQUE</span>
                        </span>
                        CLOTHES.
                    </div>
                    <div className="promo-descr">
                        Live for Influential and Innovative fashion!
                    </div>
                    <div className="promo-btn-wrapper">
                        <a href="#!">Shop Now</a>
                    </div>
                </div>
                <div className="promo-img">
                    <img src={promoImg} alt="Promo"/>
                </div>
            </div>
        </div>
    </section>);
}
 
export default Promo;