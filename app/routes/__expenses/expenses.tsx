import { Link, Outlet } from '@remix-run/react';
import ExpenseList from '~/components/expenses/ExpensesList';
import { FaPlus, FaDownload } from 'react-icons/fa';

const MOCK_EXPENSES = [
    {
        id: 'el',
        title: 'First expense',
        amount: 12.99,
        date: new Date().toISOString(),
    },
    {
        id: 'em',
        title: 'Second expense',
        amount: 1223.99,
        date: new Date().toISOString(),
    },
];

type Props = {};

const ExpensesLayout = (props: Props) => {
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
                <ExpenseList expenses={MOCK_EXPENSES} />
            </main>
        </>
    );
};

export default ExpensesLayout;
