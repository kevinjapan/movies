//
// display currency
//


const currency_signs = {
   "en-au":"$",
   "en-gb":"£",
   "en-US":"$"
}

export const display_currency = (value,currency) => {
   let currency_sign = currency_signs[currency]
   return currency_sign + new Intl.NumberFormat(currency, { maximumSignificantDigits: 3 }).format(value)
}


