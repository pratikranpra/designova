import "./globals.css";
import { static_const } from './../lib/constants';

export const metadata = {
  title: 'Home - ' + static_const['site_title'],
  description: static_const['site_desc'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}

        <link rel="stylesheet" href="/css/custom.css" />
      </body>
    </html>
  );
}
