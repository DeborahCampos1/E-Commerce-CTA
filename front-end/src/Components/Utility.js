const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "usd",
    style: "currency",
    minimumFractionDigits: 0
})

const formatPrice = (price) => `$${price.toFixed(2)}`


export default currencyFormatter 
// export const formatPrice = (price) => `$${price.toFixed(2)}`;

