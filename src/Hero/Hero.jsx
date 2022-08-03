import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section class='hero__container'>
      <div>
        <img className='hero__img' src={heroImg} alt='' />
      </div>
    </section>
  );
}
