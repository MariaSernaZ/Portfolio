import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_text">Contact</p>

      <div className="footerCover">
        <div className="footer_rrss">
          <ul className="rrss_list">
            <li className="footerList_item">
              <a
                href="https://www.linkedin.com/in/maria-serna-zafra/"
                alt="Linkedin profile"
                target="_blank"
                className="rrss_link">
                <i class="fab fa-linkedin fa-lg icon"></i>
              </a>
            </li>
            <li className="footerList_item">
              <a
                href="https://github.com/MariaSernaZ"
                alt="Github profile"
                target="_blank"
                className="rrss_link">
                <i class="fab fa-github fa-lg icon"></i>
              </a>
            </li>
            <li className="footerList_item">
              <a
                href="mailto:maria.serna.zafra@gmail.com"
                alt="Email contact"
                target="_blank"
                className="rrss_link">
                <i class="fas fa-envelope-square fa-lg icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
