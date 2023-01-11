import { Inter } from '@next/font/google';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
        <Link href={'reducer'}>Reducer State</Link>
      </div>
    </>
  );
}
