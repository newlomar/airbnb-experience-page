import Card from '../Card/Card';
import swimmer from '../assets/swimmer.png';
export default function Main() {
  return (
    <main>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
      <Card
        img={swimmer}
        status={'sold out'}
        rate={5.0}
        reviewCount={6}
        location={'USA'}
        summary='Life lessons with Katie Zaferes'
        price='136'
      />
      <Card />
      <Card />
    </main>
  );
}
