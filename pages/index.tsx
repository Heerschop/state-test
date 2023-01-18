import { Inter } from '@next/font/google';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div>
      <Link href={'state'}>Use State</Link>
      <Link href={'reducer'}>Use Reducer</Link>
      <Link href={'immer'}>Use Immer</Link>
      </div>
    </>
  );
}
