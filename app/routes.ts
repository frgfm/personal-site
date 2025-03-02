import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/index.tsx'),
  route('about', 'routes/about/index.tsx'),
  route('writings', 'routes/writings/index.tsx'),
  route('writings/:slug', 'routes/writings/post.tsx'),
] satisfies RouteConfig;
