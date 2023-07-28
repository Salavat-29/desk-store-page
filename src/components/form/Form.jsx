import styles from './form.css'


function Form () {
    return (
        <section className="form-section">
            <div className="container center">
                <div className="form-section-wrapper">
                    <h2 className="Form-title">JOIN SHOPPING COMMUNITY TO&nbsp;GET MONTHLY PROMO</h2>
                    <p className="form-description">Type your email down below and be&nbsp;young wild generation</p>
                    <form action="" method="get" className="form">
                        <div className="form-wrapper">
                            <input type="email" name="email" placeholder="Add your email here" className="form-input"  required/>
                            <a href="#" className='input-link'>
                                <button className="input-btn">SEND</button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form;