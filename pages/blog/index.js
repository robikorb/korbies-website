import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/**
 * Lists all blog posts found in the /posts directory. Each post
 * displays its title, formatted date and excerpt. Clicking a post
 * navigates to its individual page.
 */
export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Korbies Tech Blog</title>
        <meta
          name="description"
          content="Korbies Tech blog featuring tips, insights and stories about managed IT, cybersecurity, cloud and more."
        />
      </Head>
      <Navbar />
      <main className="pt-32 pb-16 bg-dark min-h-screen text-text">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6">Blog</h1>
          <p className="text-muted max-w-2xl mb-8">
            Read the latest from our team. We share practical tips, deep dives and behind‑the‑scenes stories to help you make the most of your IT.
          </p>
          <div className="space-y-8">
            {posts.map(post => (
              <article key={post.slug} className="bg-card border border-border rounded-xl shadow-soft p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-xs text-muted mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-muted mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter(name => name.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      const slug = filename.replace(/\.md$/, '');
      return {
        slug,
        title: data.title || slug,
        date: data.date || null,
        excerpt: data.excerpt || ''
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return {
    props: {
      posts
    }
  };
}