// import type { LoaderFunction } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { updateExpense } from '~/data/expenses.server';
import { validateExpenseInput } from '~/data/validation.server';
// import { getExpenseById } from '~/data/expenses.server';

// export const loader: LoaderFunction = ({ params }) =>
//     getExpenseById(params.expenseId);

export const action: ActionFunction = async ({ params, request }) => {
    const expenseId = params.expenseId;
    const formData = await request.formData();
    const expense = Object.fromEntries(formData);
    try {
        validateExpenseInput(expense);
    } catch (error) {
        return error;
    }
    await updateExpense(expenseId, expense);
    return redirect('/expenses');
};

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
