import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className='w-full mt-12'>
        <article className='max-w-none prose text-gray-200 flex flex-col justify-around'>
          <h1 className=''>
            Hi Im Steve, a web focused developer from the UK.
          </h1>
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
