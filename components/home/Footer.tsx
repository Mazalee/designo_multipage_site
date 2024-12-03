import React from "react";
import { icons } from "./data";
import Link from "next/link";
import Logo from "../../public/shared/desktop/logo-light.png";
import Image from "next/image";
import "../../styles/footer.css";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [
  { href: "/company", label: "our company" },
  { href: "/locations", label: "locations" },
  { href: "/contact", label: "contact" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="footer-card-inner">
          <div className="footer-card-details">
            <h6>Let's talk about your project</h6>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button className="footer-card-btn">get in touch</button>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-logo">
          <Link href="/">
            <Image className="footer-logo-image" src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="underline"></div>

        <div className="links-container footer-links">
          <ul>
            {links.map((link) => {
              return (
                <li key={link.label}>
                  <Link className="links" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="address">
          <h6>Toronto, Ontario M9C 3J5</h6>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>

        <div className="address">
          <h6>Contact Us (Central Office)</h6>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>

        <div className="footer-icons">
          {icons.map(({ id, icon }) => (
            <div key={id} className="social-icons">
              <span>{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
