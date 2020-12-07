import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://www.facebook.com/SignTalkCo/?ref=content_filter">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Facebook</title>
              <path
                d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/sign-talk">
          <svg xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" viewBox="0 0 31.5 31.5" >  <title>Linkedin</title>
    <path  d="M7.051 31.5H.52V10.47h6.531zM3.782 7.6a3.8 3.8 0 1 1 3.782-3.817A3.814 3.814 0 0 1 3.782 7.6zm27.711 23.9h-6.517V21.263c0-2.44-.049-5.569-3.4-5.569-3.4 0-3.916 2.651-3.916 5.393V31.5h-6.518V10.47h6.263v2.869h.095a6.862 6.862 0 0 1 6.179-3.4c6.609 0 7.824 4.352 7.824 10.005V31.5z"/>
  </svg>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/signtalkco?igshid=1uor92kp4z6pq">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <g>
                <circle cx="12.145" cy="3.892" r="1" />
                <path
                  d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                <path
                  d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z" />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;