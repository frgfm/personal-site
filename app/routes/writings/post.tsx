import { Link, useLocation } from 'react-router';
import { getPostBySlug } from '../../utils/md';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Use dynamic path resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const postsDirectory = path.join(__dirname, '../../content/writings');

export function meta({ location }: { location: { search: string } }) {
  // Get slug from URL search params
  const searchParams = new URLSearchParams(location.search);
  const slug = searchParams.get('slug');
  
  // Get the post from search params
  const post = slug ? getPostBySlug(slug) : null;
  
  return [
    { title: post?.title || 'Blog Post' },
    { name: 'description', content: `Read ${post?.title || 'this post'} by F-G Fernandez` },
  ];
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Post() {
  // Get slug from URL search params
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const slug = searchParams.get('slug');
  
  if (!slug) {
    return <div>Post not found - missing slug parameter</div>;
  }
  
  const post = getPostBySlug(slug);
  if (!post) {
    return <div>Post not found - could not load post with slug: {slug}</div>;
  }

  // Get the content
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    /* eslint-disable-next-line no-console */
    console.error(`File not found: ${fullPath}`);
    return <div>Post not found - file does not exist</div>;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);
  
  return (
    <main className='min-h-screen p-8 max-w-2xl mx-auto'>
      <nav className="mb-8">
        <Link to="/writings" className="text-green-600 hover:text-green-800">
          ← Back to writings
        </Link>
      </nav>
      
      <article className="prose lg:prose-lg mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          <time dateTime={post.date} className="text-gray-500">
            {formatDate(post.date)}
          </time>
        </header>
        
        <div className="markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
} 