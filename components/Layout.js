import Head from 'next/head';
import Link from 'next/link';

import ActiveLink from './ActiveLink';

function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{pageTitle}</title>
      </Head>
      <div className='flex flex-col min-h-screen bg-gray-900 text-gray-400'>
        <header className='w-full h-20 mt-8  flex  justify-center items-end bg-gray-900 '>
          <nav className='group w-11/12 md:w-full max-w-2xl flex flex-row justify-between items-stretch'>
            <Link href='/'>
              <div className='text-5xl z-50 text-primary cursor-pointer'>
                SB
              </div>
            </Link>
            <HamburgerBtn />
            {/* <AppNav /> */}
            <MobileNav />
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

function MobileNav() {
  return (
    <div className='fixed top-0 left-0 bg-gray-900 w-full h-screen'>
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

function HamburgerBtn({ isHidden, isOpen }) {
  return (
    <div className='w-10 z-50 flex flex-col justify-around'>
      <div className='h-1.5 w-full rounded bg-cream transition-transform duration-200 transform rotate-45 scale-x-110 origin-left'></div>
      <div className='h-1.5 w-full rounded bg-cream transition  duration-200 opacity-0'></div>
      <div className='h-1.5 w-full rounded bg-cream transition-transform duration-200 transform -rotate-45 scale-x-110 origin-left'></div>
    </div>
  );
}

export default Layout;
