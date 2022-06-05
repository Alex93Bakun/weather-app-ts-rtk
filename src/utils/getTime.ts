export const getTime = () => {
    const date = new Date();

    const [hour, minutes] = [date.getHours(), date.getMinutes()];
    return [hour, minutes].join(':');
};
