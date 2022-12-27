import { prisma } from './database.server';

/**
 * Use the prisma instance and create a new expense
 * model from schema
 * returns the awaited object added to db
 */
export const addExpense = async (expense) => {
    try {
        return await prisma.expense.create({
            data: {
                ...expense,
                amount: +expense.amount,
                date: new Date(expense.date),
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getExpenses = async () => {
    try {
        const expenses = await prisma.expense.findMany({
            orderBy: { date: 'desc' },
        });
        return expenses;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getExpenseById = async (id) => {
    try {
        const expense = await prisma.expense.findFirst({ where: { id } });
        return expense;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updateExpense = async (id, expense) => {
    try {
        await prisma.expense.update({
            where: { id },
            data: {
                ...expense,
                amount: +expense.amount,
                date: new Date(expense.date),
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};
