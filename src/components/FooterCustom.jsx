import React from 'react';
import './FooterCustom.css'; // Importamos estilos CSS

export default function FooterCustom() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link red"
          href="https://www.linkedin.com/in/jimmytzuc/"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link yellow"
          href="https://github.com/JimmyTzuc"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link red"
          href="https://www.facebook.com/jimmytzuc/"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link yellow"
          href="https://twitter.com/JimmyTzuc"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <section className="footer-texts">
        <p className="copyright">
          <span className="yellow">&copy;</span> Made by{' '}
          <span className="yellow">Jimmy Tzuc</span> All rights reserved {year}
        </p>
        <p className="contact">
          Mail contact:{' '}
          <span className="email">stjimmytzuc@gmail.com</span>
        </p>
      </section>
    </footer>
  );
}
