import matter from 'gray-matter';

// TODO - is it worth refactoring these 3 functions below?

// function returns list of posts from .md files in dir
export const posts = () =>
  ((context) => {
    const keys = context.keys();
    const documents = keys.map(context);
    return keys
      .map((key, index) => {
        // use filename ase url slug
        const slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
        const document = documents[index];
        const { data: frontmatter, content: body } = matter(document.default);
        return { frontmatter, body, slug };
      })
      .sort(
        (post1, post2) =>
          new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
      );
  })(require.context('./', true, /\.md$/));

// function generates slugs from .md files in dir
export const postSlugs = () =>
  ((context) => {
    return context
      .keys()
      .map((key) => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  })(require.context('./', true, /\.md$/));

// function returns post for given slug
export const postForSlug = async (slug) => {
  const document = await import(`./${slug}.md`);
  const { data: frontmatter, content: body } = matter(document.default);

  return { frontmatter, body, slug };
};
