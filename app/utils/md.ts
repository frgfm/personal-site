import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
}

// Get the directory where this file is located
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// The correct path includes 'app' in the path
const postsDirectory = path.join(__dirname, '../content/writings');

export function getAllPostSlugs(): string[] {
  try {
    // For server-side debugging 
    /* eslint-disable-next-line no-console */
    console.log('Reading directory:', postsDirectory);
    
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      /* eslint-disable-next-line no-console */
      console.error(`Directory does not exist: ${postsDirectory}`);
      return [];
    }
    
    const fileNames = fs.readdirSync(postsDirectory);
    /* eslint-disable-next-line no-console */
    console.log('Files found:', fileNames);
    
    // Only include .mdx files
    return fileNames
      .filter(name => name.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''));
  } catch (error) {
    // Safe to ignore linter warning for console in server-side code
    /* eslint-disable-next-line no-console */
    console.error(`Error reading posts directory: ${postsDirectory}`, error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      /* eslint-disable-next-line no-console */
      console.error(`File not found: ${fullPath}`);
      return null;
    }
    
    /* eslint-disable-next-line no-console */
    console.log('Reading file:', fullPath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Extract frontmatter
    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContents);
    
    if (!match || !match[1]) {
      return null;
    }
    
    const frontMatterBlock = match[1];
    const frontmatter: Record<string, string> = {};
    
    // Parse each line of frontmatter
    frontMatterBlock.split('\n').forEach((line) => {
      const [key, ...valueArr] = line.split(':');
      if (key && valueArr.length) {
        // Join back in case there were colons in the value
        const value = valueArr.join(':').trim();
        // Remove quotes if present
        frontmatter[key.trim()] = value.replace(/^"(.*)"$/, '$1');
      }
    });
    
    return {
      slug,
      title: frontmatter.title || 'Untitled',
      date: frontmatter.date || '',
    };
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(`Error getting post by slug ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  /* eslint-disable-next-line no-console */
  console.log('Getting posts for slugs:', slugs);
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null);
  
  // Sort posts by date in descending order
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
} 