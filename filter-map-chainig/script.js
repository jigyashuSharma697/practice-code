// const items = [
//     {name: "Pen", price: 20},
//     {name: "Book", price: 250},
//     {name: "Pencil", price: 10},
// ]
// const cheapItemName = items.filter((item)=> item.price < 100).map((item)=> item.name);

// console.log(cheapItemName)


// const products = [
//     {id: 1, name: "Mechanical Keyboard", price: 2500, inStock: true},

//     {id: 2, name: "Gaming Mouse", price: 1200, inStock: true},

//     {id: 3, name: "USB-C Hub", price: 1800, inStock: false},

//     {id: 4, name: "Laptop Stand", price: 900, inStock: true},
// ]


// const finalProduct = products.filter((product)=>product.inStock === true && product.price <= 2000).map((product)=> `${product.name} - ₹${product.price}`
// )

// console.log(finalProduct)



const candidates = [
  { id: 101, name: "Rohan", skills: "MERN", experienceYears: 2, isAvailable: true },
  { id: 102, name: "Priya", skills: "Python", experienceYears: 3, isAvailable: true },
  { id: 103, name: "Aman", skills: "MERN", experienceYears: 1, isAvailable: false },
  { id: 104, name: "Sneha", skills: "MERN", experienceYears: 4, isAvailable: true },
  { id: 105, name: "Vikram", skills: "Java", experienceYears: 2, isAvailable: true }
];


const shortlistedCandidates = candidates.filter((candidate) => candidate.isAvailable === true && candidate.skills === "MERN" && candidate.experienceYears >= 2).map((candidate)=> `${candidate.name} (${candidate.experienceYears} yrs exp)`)

console.log(shortlistedCandidates)