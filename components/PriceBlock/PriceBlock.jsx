import classNames from 'classnames';
import styles from './PriceBlock.module.css';

export function PriceBlock({ item, forModal = false }) {
  const { discountPrice, price } = item;
  return (
    <div className={styles.priceBlock}>
      {discountPrice ? (
        <div className={styles.oldPrice}>
          <del className={styles.oldPrice}>{price}&nbsp;₽</del>
          {forModal ? (
            <div className={styles.discount}>
              -{100 - Math.round((item.discountPrice / item.price).toFixed(2) * 100)}%
            </div>
          ) : null}
        </div>
      ) : null}
      <div className={styles.wrapper}>
        <span className={classNames(styles.fromText, forModal && styles.bigFromText)}>От</span>
        {discountPrice ? (
          <span className={classNames(styles.discountPrice, forModal && styles.bigPrice)}>
            {discountPrice}
          </span>
        ) : (
          <span className={classNames(styles.price, forModal && styles.bigPrice)}>{price}</span>
        )}
        <span className={classNames(styles.after, forModal && styles.bigPrice)}>
          ₽{!discountPrice && forModal ? <>&frasl;ночь</> : ''}
        </span>
      </div>
      {!discountPrice && forModal ? null : <span className={styles.perNight}>за ночь</span>}
    </div>
  );
}
