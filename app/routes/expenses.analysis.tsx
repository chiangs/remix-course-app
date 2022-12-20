import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';

const MOCK_EXPENSES = [
    {
        id: 'el',
        title: 'First expense',
        amount: 12.99,
        date: new Date().toISOString(),
    },
    {
        id: 'em',
        title: 'Second expense',
        amount: 1223.99,
        date: new Date().toISOString(),
    },
];

type Props = {};

const ExpenseAnalytics = (props: Props) => {
    return (
        <main>
            <Chart expenses={MOCK_EXPENSES} />
            <ExpenseStatistics expenses={MOCK_EXPENSES} />
        </main>
    );
};

export default ExpenseAnalytics;
