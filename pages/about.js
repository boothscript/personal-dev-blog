import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className='w-full'>
        <article className='prose max-w-none'>
          <h2>Hi, I'm Steve, a web focused developer from the UK.</h2>
          <p>
            This is some text about me. It's interesting and shows me in a good
            light without looking arrogant. I am professional and would like a
            job please.
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default About;
