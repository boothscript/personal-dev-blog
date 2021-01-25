import Link from 'next/link';

import { posts } from '../posts';
import Layout from '../components/Layout';

function Index({ posts }) {
  return (
    <Layout pageTitle='Stephen Booth'>
      <PostsList posts={posts} />
    </Layout>
  );
}

const PostsList = ({ posts }) => {
  if (!posts || !posts.length) return <p>No posts found</p>;

  return (
    <div className='w-full'>
      <ul className='mt-4'>
        {posts.map((post) => {
          const { frontmatter, slug } = post;
          const { description, date, title } = frontmatter;
          return (
            <li
              key={slug}
              className='group px-8 py-4 m-0 mt-8 border-card-border text-cream hover:bg-gray-800'
            >
              <Link href={`/blog/[post]`} as={`/blog/${slug}`}>
                <a>
                  <h2 className='text-3xl  mb-4 font-bold tracking-wide leading-10 lg:text-5xl lg:leading-tight group-hover:text-primary'>
                    {title}
                  </h2>
                  <p className='mb-4 font-light text-xl lg:text-2xl'>
                    {description}
                  </p>
                  <p className='text-small font-thin italic'>{date}</p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const postsData = posts();
  return {
    props: {
      posts: postsData,
    },
  };
}

export default Index;
