import { Link } from 'react-router';

export function meta() {
  return [
    { title: 'About Me - F-G Fernandez' },
    { name: 'description', content: 'Learn more about F-G Fernandez' },
  ];
}

export default function About() {
  return (
    <main className='min-h-screen p-8 max-w-2xl mx-auto'>
      <nav className="mb-8">
        <Link to="/" className="text-green-600 hover:text-green-800">
          ← Back home
        </Link>
      </nav>
      
      <h1 className='text-3xl font-semibold mb-6'>About Me</h1>
      
      <section className='mb-10'>
        <h2 className='text-xl font-medium mb-4'>Bio</h2>
        <p className='text-gray-700 mb-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
          nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget ultricies nisl 
          nisl eget nisl. Nullam auctor, nisl eget ultricies lacinia, nisl nisl 
          aliquam nisl, eget ultricies nisl nisl eget nisl.
        </p>
        <p className='text-gray-700 mb-4'>
          Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, 
          eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies 
          lacinia, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
        </p>
      </section>
      
      <section className='mb-10'>
        <h2 className='text-xl font-medium mb-4'>Projects</h2>
        <div className='space-y-6'>
          <div className='border rounded-lg p-4'>
            <h3 className='text-lg font-medium mb-2'>Pyronear</h3>
            <p className='text-gray-700 mb-2'>
              An early wildfire detection NGO using AI for monitoring forest areas.
            </p>
            <a 
              href='https://github.com/pyronear' 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-green-600 hover:text-green-800'
            >
              View on GitHub →
            </a>
          </div>
          
          <div className='border rounded-lg p-4'>
            <h3 className='text-lg font-medium mb-2'>Project Two</h3>
            <p className='text-gray-700 mb-2'>
              Description of another interesting project I&apos;ve worked on.
            </p>
            <a 
              href='https://example.com' 
              className='text-green-600 hover:text-green-800'
            >
              Learn more →
            </a>
          </div>
        </div>
      </section>
      
      <section className='mb-10'>
        <h2 className='text-xl font-medium mb-4'>Work Experience</h2>
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-medium'>Senior AI Engineer</h3>
            <p className='text-gray-600'>Imaginary Tech • 2020 - Present</p>
            <p className='text-gray-700 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl.
            </p>
          </div>
          
          <div>
            <h3 className='text-lg font-medium'>Machine Learning Engineer</h3>
            <p className='text-gray-600'>Data Insights Inc. • 2018 - 2020</p>
            <p className='text-gray-700 mt-2'>
              Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, 
              eget ultricies nisl nisl eget nisl.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className='text-xl font-medium mb-4'>Publications</h2>
        <ul className='list-disc pl-5 space-y-2 text-gray-700'>
          <li>
            <a 
              href='https://example.com/paper1' 
              className='text-green-600 hover:text-green-800'
            >
              Title of Research Paper (2022)
            </a>
          </li>
          <li>
            <a 
              href='https://example.com/paper2' 
              className='text-green-600 hover:text-green-800'
            >
              Another Interesting Publication (2021)
            </a>
          </li>
          <li>
            <a 
              href='https://medium.com' 
              className='text-green-600 hover:text-green-800'
            >
              Technical Blog Post on Medium (2020)
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
} 