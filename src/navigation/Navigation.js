import './Navigation.css';

function Navigation(data) {
  const section = ['Home', 'About' , 'Services' ,'Portfolio', 'Contact']

  const navLinks = section.map( section => {
    return <li><a href={'#'+ section}>{section}</a></li>
  });

  return (
    <nav>
        <h2 className='logo'>{data.logoTitle}</h2>

        <ul>
            {navLinks}
        </ul>
    </nav>
  );
}

export default Navigation;
