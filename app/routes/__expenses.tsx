/**
 * This is a pathless route
 * It doesn't add a new segment to the url
 * It is a location that allows for links to be shared
 * across components that are not nested but still a route child
 * expenses.analysis requires styles from expenses, but is not
 * structurally a child of expenses directory
 */

import type { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import expensesStyles from '~/styles/expenses.css';
export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: expensesStyles,
    },
];

const ExpensesAppLayout = () => <Outlet />;

export default ExpensesAppLayout;
