const isValidTitle = (value: string): boolean =>
    value?.trim().length > 0 && value?.trim().length <= 30;

const isValidAmount = (value: string): boolean => {
    const amount = parseFloat(value);
    return !isNaN(amount) && amount > 0;
};

const isValidDate = (value: string): boolean => {
    if (!value) {
        return false;
    }
    return new Date(value).getTime() < new Date().getTime();
};

export const validateExpenseInput = (input: {
    [k: string]: FormDataEntryValue;
}) => {
    let validationErrors = new Map();

    if (!isValidTitle(input.title as string)) {
        validationErrors.set(
            'title',
            'Invalid expense title. Must be at most 30 characters long.'
        );
    }

    if (!isValidAmount(input.amount as string)) {
        validationErrors.set(
            'amount',
            'Invalid amount. Must be a number greater than zero.'
        );
    }

    if (!isValidDate(input.date as string)) {
        validationErrors.set(
            'date',
            'Invalid date. Must be a date before today.'
        );
    }

    if (validationErrors.size) {
        const errors = Object.fromEntries(validationErrors);
        throw errors;
    }
};
