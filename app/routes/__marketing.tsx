import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import MainHeader from '~/components/navigation/MainHeader';
import marketingStyles from '~/styles/marketing.css';

export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: marketingStyles,
    },
];

const MarketingAppLayout = () => (
    <>
        <MainHeader />
        <Outlet />
    </>
);

export default MarketingAppLayout;
