import { static_const } from './../../lib/constants';

export const metadata = {
    title: 'Contact Us - ' + static_const['site_title'],
    description: static_const['site_desc'],
};

export default function RootLayout({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}