class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          width: 80px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          border-right: 1px solid #ff0000;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2rem;
          z-index: 1000;
        }
        
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 1.5rem 0;
          color: #ff0000;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .nav-item:hover {
          color: #00ffff;
          transform: scale(1.1);
        }
        
        .nav-item i {
          margin-bottom: 0.5rem;
        }
        
        .nav-text {
          font-size: 0.8rem;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          nav {
            width: 100%;
            height: 60px;
            flex-direction: row;
            justify-content: space-around;
            padding-top: 0;
            border-right: none;
            border-bottom: 1px solid #ff0000;
          }
          
          .nav-item {
            margin: 0;
          }
        }
      </style>
      <nav>
        <a href="index.html" class="nav-item">
          <i data-feather="home"></i>
          <span class="nav-text">Home</span>
        </a>
        
        <a href="2d.html" class="nav-item">
          <i data-feather="image"></i>
          <span class="nav-text">2D</span>
        </a>
        
        <a href="3d.html" class="nav-item">
          <i data-feather="box"></i>
          <span class="nav-text">3D</span>
        </a>
        
        <a href="4d.html" class="nav-item">
          <i data-feather="layers"></i>
          <span class="nav-text">4D</span>
        </a>
        
        <a href="about.html" class="nav-item">
          <i data-feather="user"></i>
          <span class="nav-text">About</span>
        </a>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
