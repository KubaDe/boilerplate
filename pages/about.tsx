import Link from 'next/link';
import Index from '../components/Layout';

const AboutPage = () => (
  <Index title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Index>
);

export default AboutPage;
