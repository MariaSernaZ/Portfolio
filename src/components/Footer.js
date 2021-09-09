import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer_container">
        <div className="footer_contact">
          <div className="footer_text">
            <h2 className="footer_text1">Contact</h2>
            <div className="talk_container">
              <p className="footer_text2">Let´s </p>
              <ul className="talk_list">
                <li>talk!</li>
                <li>
                  <i class="fas fa-phone-alt icon_phone"></i>
                </li>
              </ul>
            </div>
          </div>
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
        </div>
        <div className="footer_arrowCopy">
          <div classname="footer_arrow">
            <a href="#header">
              <i class="fas fa-arrow-alt-circle-up arrowIcon"></i>
            </a>
          </div>
          <div className="footer_copy">
            <p className="copy">
              &copy; 2021 · Developed by María Serna Zafra ·
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
