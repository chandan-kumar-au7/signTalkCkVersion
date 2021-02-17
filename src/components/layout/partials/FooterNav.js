import React from 'react';
import classNames from 'classnames';

import { Link, animateScroll as scroll } from "react-scroll";
const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );
  const handleTop =() => {
    scroll.scrollToTop()
}

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
    
        <li>
          <Link to="#0">Contact</Link>
        </li>
        {/* <li>
          <Link to="#0">About us</Link>
        </li> */}
        <li>
          <Link to="#0">FAQ's</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li>
        <li >
          <Link  onClick={handleTop} to="#0">Go to Top</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;