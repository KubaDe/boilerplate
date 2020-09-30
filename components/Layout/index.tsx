import React, { ReactNode } from 'react';
import Head from 'next/head';

import * as SC from './Layout.styled';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Index = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header />
    <SC.Wrapper>
      <SC.Content>{children}</SC.Content>
    </SC.Wrapper>
    <footer />
  </>
);

export default Index;
