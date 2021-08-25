// js object notation
// JSON
const user = { name:'arif', Age:24, GF:false};
const toStringify = JSON.stringify(user);
console.log(toStringify)

// object er vhitore array ba object thakle
const year = {
    month:'january',
    date: 29,
    week:['satarday','sunday', 'frinday']
}
const toStringify = JSON.stringify(year);
console.log(toStringify)

// stringify er object gula ke jodi object e cnvert korte chai
const convert = JSON.parse(toStringify);
console.log(convert)