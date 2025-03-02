import { Link } from 'react-router';
import { getAllPosts, type BlogPost } from '../../utils/md';

export function meta() {
  return [
    { title: 'Writings - F-G Fernandez' },
    { name: 'description', content: 'Blog posts by F-G Fernandez' },
  ];
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Writings() {
  // Get all posts
  let posts: BlogPost[] = [];
  
  try {
    posts = getAllPosts();
    /* eslint-disable-next-line no-console */
    console.log('Processed posts:', posts);
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log('Could not load posts', error);
  }

  return (
    <main className='min-h-screen p-8 max-w-2xl mx-auto'>
      <nav className="mb-8">
        <Link to="/" className="text-green-600 hover:text-green-800">
          ← Back home
        </Link>
      </nav>
      
      <h1 className='text-3xl font-semibold mb-6'>Writings</h1>
      
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found. Check back soon!</p>
      ) : (
        <div className='space-y-8'>
          {posts.map((post: BlogPost) => (
            <article key={post.slug} className='border-b pb-6 last:border-b-0'>
              <Link 
                to={`/writings/post?slug=${post.slug}`}
                className='block group'
              >
                <h2 className='text-xl font-medium mb-2 group-hover:text-green-600 transition-colors'>
                  {post.title}
                </h2>
                <time dateTime={post.date} className='text-gray-500 text-sm'>
                  {formatDate(post.date)}
                </time>
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
} 