import Card from '../Card/Card';
import swimmer from '../assets/swimmer.png';
export default function Main() {
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
        <Card
          imageName={'swimmer'}
          status={'sold out'}
          rate={5.0}
          reviewCount={6}
          location={'USA'}
          summary='Life lessons with Katie Zaferes'
          price='136'
        />
        <Card
          imageName={'bride'}
          status={'online'}
          rate={5.0}
          reviewCount={30}
          location={'USA'}
          summary='Learn wedding photography'
          price='125'
        />
        <Card
          imageName={'bike'}
          status={''}
          rate={4.8}
          reviewCount={2}
          location={'USA'}
          summary='Group Mountain Biking'
          price='50'
        />
      </section>
    </main>
  );
}
