import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}

const Content = ({ children }: Props) => (
  <div className="relative">
    <Header />
    <div className="">{children}</div>
    <Footer />
  </div>
);

export default Content;
