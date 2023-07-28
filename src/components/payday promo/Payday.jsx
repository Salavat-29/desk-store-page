import './payday.css'
import paydayImg from './../../img/fashion-images/images/promo-img.jpg'


const Payday = () => {
    return (
    <section className="payday-promo">
        <div className="payday-content">
            <div className="payday-text">
                <div className="payday-title">
                    <span className="highlight-white"> 
                        <span>payday</span>
                    </span>
                        sale now 
                </div>
                <div className="payday-descr">
                Spend minimal $100 get&nbsp;30% off voucher code for your next purchase
                </div>
                <div className="promo-deadline">
                    <span className="promo-deadline-dates">1&nbsp;June&nbsp;&mdash; 10&nbsp;June 2021</span>
                    <br />
                    *Terms &amp;&nbsp;Conditions apply
                </div>
                <div className="payday-btn-wrapper">
                    <a href="#!">Shop Now</a>
                </div>
            </div>
            <div className="payday-img">
                <img src={paydayImg} alt="Payday-image"/>
            </div>
        </div>
    </section>);
}
 
export default Payday;