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
        <header className='w-full h-16 border-b border-green-300 flex items-center justify-center bg-gray-900'>
          <div className='w-11/12 md:w-full max-w-3xl flex flex-row justify-between'>
            <Link href='/'>
              <div className='text-2xl text-green-300 cursor-pointer'>
                Stephen Booth
              </div>
            </Link>
            <AppNav />
          </div>
        </header>
        <main className='w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow bg-gray-900 '>
          {children}
        </main>
        <footer className='flex flex-col items-center w-full h-24 border-t border-green-300 text-gray-400'>
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
    <nav className='text-2xl text-gray-200'>
      <ActiveLink href='/' activeClassName='text-green-300'>
        <span className='ml-4'>
          <a className='hover:text-green-300 cursor-pointer'>Blog</a>
        </span>
      </ActiveLink>
      <ActiveLink href='/about' activeClassName='text-green-300'>
        <span className='ml-2'>
          <a className='hover:text-green-300 cursor-pointer'>About</a>
        </span>
      </ActiveLink>
    </nav>
  );
}

export default Layout;
