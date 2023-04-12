import React from "react";
import "./footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
       
        <div className="footer-links">
          <ul>
            <li><a href="/">Anasayfa</a></li>
            <li><a href="/hakkimizda">Hakkımızda</a></li>
            <li><a href="/iletisim">İletişim</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="bottom-container">
        <a className="foot-link" href="https://www.linkedin.com/">Linkedin</a>
        <a className="foot-link" href="https://twitter.com/">Twitter</a>
        <a className="foot-link" href="https://www.appbrewery.co/">Website</a>
      
    </div>
      </div>
      <div className="footer-bottom">
        <p>Tüm hakları saklıdır &copy; 2023</p>
      </div>
    </div>

  );
}

export default Footer