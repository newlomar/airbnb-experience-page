import airbnb from '../assets/airbnb.png';

export default function NavBar() {
  return (
    <header>
      <nav className='nav'>
        <img className='nav__logo' src={airbnb} alt='airbnb logo' />
      </nav>
    </header>
  );
}
