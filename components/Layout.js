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
        <header className='w-full h-20 mt-8  flex  justify-center items-end bg-gray-900'>
          <div className='group w-11/12 md:w-full max-w-2xl flex flex-row justify-between items-stretch'>
            <Link href='/'>
              <div className='text-5xl text-primary cursor-pointer'>SB</div>
            </Link>
            <AppNav />
          </div>
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

function AppNav() {
  return (
    <nav className=' text-cream font-sans flex items-end '>
      <ActiveLink href='/work' activeClassName='nav-active'>
        <a className='nav-item'>work</a>
      </ActiveLink>
      <ActiveLink href='/' activeClassName='nav-active'>
        <a className='nav-item'>words</a>
      </ActiveLink>
      <ActiveLink href='/bio' activeClassName='nav-active'>
        <a className='nav-item'>bio</a>
      </ActiveLink>
      <ActiveLink href='/about' activeClassName='nav-active'>
        <a className='nav-item'>about</a>
      </ActiveLink>
    </nav>
  );
}

export default Layout;
