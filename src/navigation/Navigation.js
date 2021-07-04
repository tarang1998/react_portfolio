import './Navigation.css';

function Navigation() {
  return (
    <nav>
        <h2 className='logo'>React Portfolio</h2>

        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Portfolio</a></li>
            <li><a href='#'>Contact</a></li>
            
        </ul>
    </nav>
  );
}

export default Navigation;
