import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import marketingStyles from '~/styles/marketing.css';

export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: marketingStyles,
    },
];

const MarketingAppLayout = () => <Outlet />;

export default MarketingAppLayout;
