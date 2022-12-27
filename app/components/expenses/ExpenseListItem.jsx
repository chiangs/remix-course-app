import { Link, Form, useSubmit, useFetcher } from '@remix-run/react';

function ExpenseListItem({ title, amount, id }) {
    // const submit = useSubmit(); only for GET
    const fetcher = useFetcher(); //prevent subsequent routing
    const EXPENSE_ACTION_URL = `/expenses/${id}`;

    function deleteExpenseItemHandler() {
        const shouldProceed = confirm(
            'Are you sure? This will permanently delete this expense.'
        );
        if (!shouldProceed) {
            return;
        }
        fetcher.submit(null, {
            method: 'delete',
            action: EXPENSE_ACTION_URL,
        });
    }

    const item = (
        <>
            <div>
                <h2 className='expense-title'>{title}</h2>
                <p className='expense-amount'>${amount.toFixed(2)}</p>
            </div>
            <menu className='expense-actions'>
                <button onClick={deleteExpenseItemHandler}>Delete</button>
                {/* <Form method='post' action={EXPENSE_ACTION_URL}>
                    <button name='intent' value='DELETE'>
                        Delete
                    </button>
                </Form> */}
                <Link to={id}>Edit</Link>
            </menu>
        </>
    );
    const lockedItem = <p>Deleting...</p>;
    const isFetching = fetcher.state !== 'idle';
    const lockedClass = isFetching ? 'locked' : '';
    const content = isFetching ? lockedItem : item;

    return (
        <article className={`expense-item ${lockedClass}`}>{content}</article>
    );
}

export default ExpenseListItem;
