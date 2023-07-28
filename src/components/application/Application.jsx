import styles from './application.css'
import mobileImg from './../../img/fashion-images/images/vouchers-img.png'
import appStore from './../../img/fashion-images/icons/app-store.png'
import googlePlay from './../../img/fashion-images/icons/google-play.png'


function Application () {
    return (
        <section className="app">
            <div className="container">
                <div className="app-wrapper">
                    <div className="advert-text">
                        <h2 className="advert-title">DOWNLOAD APP &  GET THE VOUCHER!</h2>
                        <p className="advert-descr">Get&nbsp;30% off for first transaction using Rondovision mobile app for now.</p>
                        <div className="mobile-app">
                            <div className="app-store">
                                <a href="#!"><img src={appStore} alt="App Store" /></a>
                            </div>
                            <div className="google-play">
                                <a href="#!"><img src={googlePlay} alt="Google Play" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-img">
                        <img src={mobileImg} alt="Mobile app image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Application;