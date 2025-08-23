import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/**
 * Blog post page.
 *
 * Converts the markdown content of a post into HTML at build time. The
 * markup is injected directly into the page. Each post includes its
 * title and formatted date in the header.
 */
export default function Post({ title, date, content }) {
  return (
    <>
      <Head>
        <title>{title} — Korbies Tech Blog</title>
        <meta name="description" content={title} />
      </Head>
      <Navbar />
      <main className="pt-32 pb-16 bg-dark min-h-screen text-text">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-2">{title}</h1>
          {date && (
            <p className="text-muted text-sm mb-6">{new Date(date).toLocaleDateString()}</p>
          )}
          <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </main>
      <Footer />
    </>
  );
}

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getStaticPaths() {
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames
    .filter(name => name.endsWith('.md'))
    .map(filename => ({
      params: { slug: filename.replace(/\.md$/, '') }
    }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    props: {
      title: data.title || params.slug,
      date: data.date || null,
      content: contentHtml
    }
  };
}