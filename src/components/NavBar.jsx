import './NavBar.css';

function NavBar() {
  const items = [
    {
      label: 'About',
      link: '#About',
    },
    { label: 'freeCodeCamp.org', link: 'https://www.freecodecamp.org/' },
    { label: 'Discord', link: '#' },
    { label: 'Events', link: '#' },
    { label: 'Contributors', link: '#' },
  ].map((x) => (
    <li key={x.label}>
      <a href={x.link}>{x.label}</a>
    </li>
  ));

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">{items}</ul>
      </div>
    </nav>
  );
}

export default NavBar;
