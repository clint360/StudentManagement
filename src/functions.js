export const parse = Intl.NumberFormat('en-US');
export const normalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}