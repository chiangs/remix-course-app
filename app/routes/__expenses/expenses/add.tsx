import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { addExpense } from '~/data/expenses.server';
import { validateExpenseInput } from '~/data/validation.server';

export const action: ActionFunction = async ({ request, params }) => {
    const formData = await request.formData();
    const expense: { [k: string]: FormDataEntryValue } =
        Object.fromEntries(formData);
    try {
        validateExpenseInput(expense);
    } catch (error) {
        return error;
    }

    await addExpense(expense);
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
