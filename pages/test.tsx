import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import Index from 'components/Layout';

const Page: NextPage = () => {
  const title = 'smaple app';

  return (
    <Index title={title}>
      <Link href="/">root</Link>
    </Index>
  );
};

export default Page;
