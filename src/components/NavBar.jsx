import './NavBar.css';

function NavBar() {
  const items = [
    {
      label: 'About',
      link: '#About',
    },
    { label: 'Free Code Camp', link: '#' },
    { label: 'Discord', link: '#' },
    { label: 'Events', link: '#' },
    { label: 'Contributors', link: '#' },
  ].map((x) => (
    <li>
      <a href={x.link}>{x.label}</a>
    </li>
  ));

  return (
    <nav className="navbar">
      <ul>{items}</ul>
    </nav>
  );
}

// eslint-disable-next-line
export { NavBar };
