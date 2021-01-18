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
              className='px-8 py-2 m-0 mt-8 border-card-border hover:bg-gray-700'
            >
              <Link href={`/blog/[post]`} as={`/blog/${slug}`}>
                <a>
                  <div className='text-2xl mb-1 font-large text-gray-100'>
                    {title}
                  </div>
                  <p className='mb-2font-light mb-2'>{description}</p>
                  <p className='text-small font-hairline text-gray-400'>
                    {date}
                  </p>
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
