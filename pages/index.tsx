import type { ReactElement } from 'react';
import NestedLayout from '../components/NestedLayout';
import Layout from '../components/layout/Layout';
import type { NextPageWithLayout } from './_app';
import Home from './home';

const Page: NextPageWithLayout = () => {
  return <Home />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Home | HashNet" description="Home">
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
