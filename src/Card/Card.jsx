export default function Card({ status, rate, reviewCount, location, summary }) {
  return (
    <a href='#'>
      <section className='card'>
        <div className='card__image'>
          <img src='' alt='' />
          <span className='card__status'>{status}</span>
        </div>
        <article>
          <div className='card__rate'>
            <img src='' alt='' />
            {rate}
            {reviewCount} -{location}
          </div>
          <div className='card__summary'>{summary}</div>
          <div>
            <b>From {price}</b> / person
          </div>
        </article>
      </section>
    </a>
  );
}
