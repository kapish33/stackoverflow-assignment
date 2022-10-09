import React, { FC, ReactNode } from 'react';
import Footer from './Footer';
import Master from './Master';

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => (
  <>
    <Master children={children} />
    <Footer />
  </>
);
export default Layout;
