// import type { LoaderFunction } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
// import { getExpenseById } from '~/data/expenses.server';

// export const loader: LoaderFunction = ({ params }) =>
//     getExpenseById(params.expenseId);

type Props = {};

const ViewEditExpense = (props: Props) => {
    const navigate = useNavigate();
    const closeModalHandler = () => navigate('..');

    return (
        <Modal onClose={closeModalHandler}>
            <ExpenseForm />
        </Modal>
    );
};

export default ViewEditExpense;
