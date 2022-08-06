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
    <a href='#'>
      <section className='card'>
        <div className={'card__image card__image__' + imageName}>
          <span className='card__status'>{status}</span>
        </div>
        <article>
          <ul>
            <li className='card__rate'>
              <img src='' alt='' />
              {rate}
              {reviewCount} -{location}
            </li>
            <li className='card__summary'>{summary}</li>
            <li className='card__price'>
              <b>From {price}</b> / person
            </li>
          </ul>
        </article>
      </section>
    </a>
  );
}
