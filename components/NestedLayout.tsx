import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const NestedLayout = ({ children }: Props) => {
  return (
    <div className='bg-[100vh]'>
      <Header />
      {children}
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default NestedLayout;
