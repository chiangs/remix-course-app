// import type { LoaderFunction } from '@remix-run/node';
import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { deleteExpense, updateExpense } from '~/data/expenses.server';
import { validateExpenseInput } from '~/data/validation.server';
// import { getExpenseById } from '~/data/expenses.server';

// export const loader: LoaderFunction = ({ params }) =>
//     getExpenseById(params.expenseId);

export const action: ActionFunction = async ({ params, request }) => {
    const method = request.method;
    const expenseId = params.expenseId;
    const formData = await request.formData();
    const intent = await formData.get('intent');
    const expense = Object.fromEntries(formData);
    switch (method) {
        /**
         * Form reverts to form which only accepts
         * GET and POST
         */
        case 'POST':
            if (intent === 'DELETE') {
                await deleteExpense(expenseId);
            }
            break;
        case 'PATCH':
            try {
                validateExpenseInput(expense);
            } catch (error) {
                return error;
            }
            await updateExpense(expenseId, expense);
            break;
        default:
            return redirect('/expenses');
    }
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
