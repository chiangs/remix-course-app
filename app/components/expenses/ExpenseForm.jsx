import {
    Form,
    Link,
    useActionData,
    useLoaderData,
    useMatches,
    useParams,
    useTransition as useNavigation,
} from '@remix-run/react';

const DEFAULT_INPUT_VALUES = {
    title: '',
    amount: '',
    date: '',
};

function ExpenseForm() {
    // const loaderData = useLoaderData();
    /**
     * useMatches gives an array of data for each
     * matching active route
     * The details data is already
     * available from the parent route so we dont need another loader
     * Saves an additional request for cases like this
     */
    const params = useParams();
    const matches = useMatches();
    const expense = matches
        .find((m) => m.id === 'routes/__expenses/expenses')
        .data.find((d) => d.id === params.expenseId);
    const actionData = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state !== 'idle';
    const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

    const defaultValues = expense
        ? {
              title: expense.title,
              amount: expense.amount,
              date: expense.date,
          }
        : { ...DEFAULT_INPUT_VALUES };

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
                    defaultValue={defaultValues.title}
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
                        defaultValue={defaultValues.amount}
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
                        defaultValue={defaultValues.date?.slice(0, 10)}
                        required
                    />
                </p>
            </div>
            {errors}
            <div className='form-actions'>
                <button disabled={isSubmitting}>{submitLabel}</button>
                <Link to='..'>Cancel</Link>
            </div>
        </Form>
    );
}

export default ExpenseForm;
