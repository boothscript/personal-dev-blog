import React from 'react';
import ActiveLink from './ActiveLink';

export default function DesktopNav({ navLinks }) {
  return (
    <ul className='hidden md:flex md:flex-row text-cream font-sans md:items-end'>
      {navLinks.map(([href, linkText]) => {
        return (
          <li key={linkText}>
            <ActiveLink href={href} activeClassName='nav-active'>
              <a className='nav-item'>{linkText}</a>
            </ActiveLink>
          </li>
        );
      })}
    </ul>
  );
}
