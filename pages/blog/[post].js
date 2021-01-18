import ReactMarkdown from 'react-markdown';

import { postSlugs, postForSlug } from '../../posts';
import Layout from '../../components/Layout';
import CodeBlock from '../../components/CodeBlock';

export default function Post({ frontmatter, body }) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={frontmatter.title}>
      <div className='w-full '>
        <article className='prose max-w-none text-gray-200'>
          <h1>{frontmatter.title}</h1>
          <p className='italic'>{frontmatter.date}</p>
          <ReactMarkdown source={body} renderers={{ code: CodeBlock }} />
        </article>
      </div>
    </Layout>
  );
}
// export default function Post() {
//   return <h1>hello</h1>;
// }

export async function getStaticProps({ params }) {
  const { frontmatter, body } = await postForSlug(params.post);

  return {
    props: { frontmatter, body },
  };
}

export async function getStaticPaths() {
  const paths = postSlugs().map((slug) => {
    return {
      params: {
        post: slug,
      },
    };
  });
  return {
    // paths: [{ params: { post: 'testpost' } }],
    paths,
    fallback: false,
  };
}
