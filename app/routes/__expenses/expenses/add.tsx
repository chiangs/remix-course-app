import type { ActionFunction } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';

export const action: ActionFunction = () => {};
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
