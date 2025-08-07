import "../styles/Header.css"; //  Esto sube una carpeta y luego entra a styles/

function Header() {
  return (
    <header style={styles.header}>
      <h1>Spooky Time</h1>
      <nav>
        <a href="/" style={styles.link}>Inicio</a>
        <a href="/about" style={styles.link}>Acerca</a>
      </nav>
    </header>
  );
}

const styles = {
  
};

export default Header;
