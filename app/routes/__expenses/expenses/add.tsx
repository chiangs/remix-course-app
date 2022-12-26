import { ActionFunction, redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { addExpense } from '~/data/expenses.server';

export const action: ActionFunction = async ({ request, params }) => {
    const formData = await request.formData();
    const expense = Object.fromEntries(formData);
    addExpense(expense);
    return redirect('/expenses');
};
type Props = {};

const AddExpense = (props: Props) => {
    const navigate = useNavigate();
    const closeModalHandler = () => navigate('..');

    return (
        <Modal onClose={closeModalHandler}>
            <ExpenseForm />
        </Modal>
    );
};

export default AddExpense;
