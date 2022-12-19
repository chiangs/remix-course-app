import { Outlet } from '@remix-run/react';

type Props = {};

const ExpensesLayout = (props: Props) => {
    return (
        <main>
            <p>Shared element</p>
            <Outlet />
        </main>
    );
};

export default ExpensesLayout;
