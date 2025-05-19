// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#" className="logo">
          <img src="/llama-pic.png" alt="Yama AI" />
        </a>
        <nav>
          <a href="#solutions">Solutions</a>
          <a href="#resources">Resources</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="btn-install">Install</button>
      </div>
    </header>
  );
}
