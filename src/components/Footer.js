import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/vitraliityffany/">@vitraliityffany</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. {' '}
          <a href="https://www.promovis.ro/">Web development by Promovis</a>.
        </span>
      </div>
    </footer>
  </div>
)
