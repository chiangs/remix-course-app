import {
    Form,
    Link,
    useActionData,
    useTransition as useNavigation,
} from '@remix-run/react';

function ExpenseForm() {
    const actionData = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state !== 'idle';
    const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

    const errors = actionData ? (
        <ul>
            {Object.values(actionData).map((e) => (
                <li key={e}>{e}</li>
            ))}
        </ul>
    ) : null;
    const submitLabel = isSubmitting ? 'Saving...' : 'Save Expense';

    return (
        <Form method='post' className='form' id='expense-form'>
            <p>
                <label htmlFor='title'>Expense Title</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    required
                    maxLength={30}
                />
            </p>

            <div className='form-row'>
                <p>
                    <label htmlFor='amount'>Amount</label>
                    <input
                        type='number'
                        id='amount'
                        name='amount'
                        min='0'
                        step='0.01'
                        required
                    />
                </p>
                <p>
                    <label htmlFor='date'>Date</label>
                    <input
                        type='date'
                        id='date'
                        name='date'
                        max={today}
                        required
                    />
                </p>
            </div>
            {errors}
            <div className='form-actions'>
                <button disable={isSubmitting}>{submitLabel}</button>
                <Link to='..'>Cancel</Link>
            </div>
        </Form>
    );
}

export default ExpenseForm;
