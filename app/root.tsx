import React, { ReactNode } from 'react';
import { Outlet, Links } from '@remix-run/react';
import Content from './routes/common/components/Content';
import styles from './styles/app.css';

interface DocumentProps {
  children: ReactNode;
  title?: string;
}

export const links = () => ([{ rel: 'stylesheet', href: styles }]);

const App = () => {
  return (
    <Document>
      <Content>
        <Outlet />
      </Content>
    </Document>
  );
};

const Document = ({ children, title }: DocumentProps) => {
  return (
    <html lang="en">
    <head>
      <Links />
      <title>{title ? title : 'Remix Template'}</title>
    </head>
    <body>
      {children}
    </body>
    </html>
  )
}

export default App;