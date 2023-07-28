import styles from './Card.module.css'
import cat01Img from '../../img/fashion-images/categories/cat-01.jpg'
import arrowImg from '../../img//fashion-images/icons/arrow.svg'

const Card = ({title, img}) => {

    return (
         <div className={styles.card}>
            <a href="#!" className={styles.card__link}></a>
            <img
             className={styles.card__img} 
             src={img} 
             alt="Category ..."
            />

            <div className={styles.card__description}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>
                        {title}
                    </div>
                    <div className={styles.card__muted}>Explore Now!</div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowImg} alt="arrow-icons"/>
                </div>
            </div>
        </div>
    )
}


export default Card;
