import React from 'react';
import ActiveLink from './ActiveLink';

export default function MobileNav({ isOpen, navLinks }) {
  return (
    <div id='mobile-nav' className={`${isOpen && 'open'}`}>
      <ul className=' h-full flex flex-col justify-center items-center text-cream font-sans'>
        {navLinks.map(([href, linkText]) => {
          return (
            <li key={linkText} className='my-8 mx-8'>
              <ActiveLink href={href} activeClassName='nav-active'>
                <a className='mob-nav-item'>{linkText}</a>
              </ActiveLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
