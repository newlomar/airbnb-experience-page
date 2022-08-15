import Card from '../Card/Card';
import cardsInfo from '../cardsInfo.json';

export default function Main() {
  const info = cardsInfo.cardInfo;
  return (
    <main className='main'>
      <section className='main__text'>
        <h1 className='main__h1'>Online Experiences</h1>
        <p className='main__paragraph'>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
      <section className='main__cards'>
        {info.map((cardInfo) => {
          return (
            <Card
              key={cardInfo.id}
              imageName={cardInfo.coverImg}
              status={cardInfo.status}
              rate={cardInfo.stats.rating}
              reviewCount={cardInfo.reviewCount}
              location={cardInfo.location}
              summary={cardInfo.title}
              price={cardInfo.price}
            />
          );
        })}
      </section>
    </main>
  );
}
