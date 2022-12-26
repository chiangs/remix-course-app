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
