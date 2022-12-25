import { Outlet } from '@remix-run/react';
import ExpenseList from '~/components/expenses/ExpensesList';

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
                <ExpenseList expenses={MOCK_EXPENSES} />
            </main>
        </>
    );
};

export default ExpensesLayout;
