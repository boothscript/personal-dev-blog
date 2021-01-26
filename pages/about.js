import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout pageTitle={'Stephen Booth - About'}>
      <div className='w-full '>
        <article className='prose prose-lg lg:prose-xl max-w-none text-cream'>
          <h1 className=''>
            Hi Im Steve, a web focused developer from the UK.
          </h1>
          <p>
            This is some text about me. It's interesting and shows me in a good
            light without looking arrogant. I am professional and would like a
            job please.
          </p>
          <p>
            Get in touch at{' '}
            <a href='mailto:stephenboothdev@gmail.com'>
              stephenboothdev@gmail.com
            </a>
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default About;
