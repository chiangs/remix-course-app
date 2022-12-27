import type { LoaderFunction } from '@remix-run/node';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { FaDownload, FaPlus } from 'react-icons/fa';
import ExpenseList from '~/components/expenses/ExpensesList';
import { getExpenses } from '~/data/expenses.server';

/**
 * ! Remix calls all nested loaders in parallel, not sequentially.
 */
export const loader: LoaderFunction = () => getExpenses();

type Props = {};

const ExpensesLayout = (props: Props) => {
    const expenses = useLoaderData();
    return (
        <>
            <Outlet />
            <main>
                <section id='expenses-actions'>
                    <Link to='add'>
                        <FaPlus />
                        <span>Add expenses</span>
                    </Link>
                    <a href='/expenses/raw'>
                        <FaDownload />
                        <span>Load raw data</span>
                    </a>
                </section>
                <ExpenseList expenses={expenses} />
            </main>
        </>
    );
};

export default ExpensesLayout;
