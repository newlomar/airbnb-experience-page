import star from '../assets/star.png';

export default function Card({
  imageName,
  status,
  rate,
  reviewCount,
  location,
  summary,
  price,
}) {
  return (
    <a href='#' className='link_card'>
      <section className='card'>
        <div className={'card__image card__image__' + imageName}>
          <div className='card__status'>{status}</div>
        </div>
        <article>
          <ul className='card__information'>
            <li className='card__rate'>
              <img className='card__starImg' src={star} alt='' />
              {Number(rate).toFixed(1)}
              <span className='card__rate__gray'>
                ({reviewCount}) &#x2022; {location}
              </span>
            </li>
            <li className='card__summary'>{summary}</li>
            <li className='card__price'>
              <b>From ${price}</b> / person
            </li>
          </ul>
        </article>
      </section>
    </a>
  );
}
