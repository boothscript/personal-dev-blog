import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

import ActiveLink from './ActiveLink';

function Layout({ children, pageTitle }) {
  // mobile nav state
  const [isOpen, setIsOpen] = useState(false);
  const clickFunc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{pageTitle}</title>
      </Head>
      <div className='flex flex-col min-h-screen bg-gray-900 text-gray-400'>
        <header className='w-full h-20 mt-8  flex  justify-center items-end bg-gray-900 '>
          <nav className=' w-11/12 md:w-full max-w-2xl flex flex-row justify-between items-stretch'>
            <Link href='/'>
              <div className='text-5xl z-50 text-primary cursor-pointer'>
                SB
              </div>
            </Link>
            <HamburgerBtn isOpen={isOpen} clickFunc={() => clickFunc()} />
            {/* <AppNav /> */}
            <MobileNav isOpen={isOpen} />
          </nav>
        </header>
        <main className='w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow bg-gray-900 font-sans'>
          {children}
        </main>
        <footer className='flex flex-col items-center w-full h-24 border-t border-primary text-cream'>
          <div className='w-11/12 md:w-full max-w-3xl m-auto flex flex-row items-center justify-center'>
            <i>
              "Keep an open mind, but not so open that your brain falls out."
            </i>
          </div>
        </footer>
      </div>
    </>
  );
}

function MobileNav({ isOpen }) {
  return (
    <div id='mobile-nav' className={isOpen && 'open'}>
      <ul className=' h-full flex flex-col justify-center items-center text-cream font-sans'>
        <li className='my-8 mx-8'>
          <ActiveLink href='/work' activeClassName='nav-active'>
            <a className='mob-nav-item'>work</a>
          </ActiveLink>
        </li>

        <li className='my-8 mx-8'>
          <ActiveLink href='/' activeClassName='nav-active'>
            <a className='mob-nav-item'>words</a>
          </ActiveLink>
        </li>

        <li className='my-8 mx-8'>
          <ActiveLink href='/bio' activeClassName='nav-active'>
            <a className='mob-nav-item'>bio</a>
          </ActiveLink>
        </li>

        <li className='my-8 mx-8'>
          <ActiveLink href='/about' activeClassName='nav-active'>
            <a className='mob-nav-item'>about</a>
          </ActiveLink>
        </li>
      </ul>
    </div>
  );
}

function AppNav() {
  return (
    <ul className=' md:flex md:flex-row text-cream font-sans md:items-end'>
      <li>
        <ActiveLink href='/work' activeClassName='nav-active'>
          <a className='nav-item'>work</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href='/' activeClassName='nav-active'>
          <a className='nav-item'>words</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href='/bio' activeClassName='nav-active'>
          <a className='nav-item'>bio</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href='/about' activeClassName='nav-active'>
          <a className='nav-item'>about</a>
        </ActiveLink>
      </li>
    </ul>
  );
}

function HamburgerBtn({ isOpen, clickFunc }) {
  return (
    <button id='hamburger-btn' className='' onClick={() => clickFunc()}>
      <div className={isOpen && 'open'}></div>
      <div className={isOpen && 'open'}></div>
      <div className={isOpen && 'open'}></div>
    </button>
  );
}

export default Layout;
