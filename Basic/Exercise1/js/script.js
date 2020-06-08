let sandwiches = `{ "sandwich": "hamburger", "calories": "260", "ShouldIEatIt": false }`
let fries = `{ "fries_size": "Large French Fries", "calories": "570", "ShouldIEatIt": true }`

let sandwichesObj = JSON.parse(sandwiches)
let friesObj = JSON.parse(fries)

console.log(sandwichesObj)
console.log(friesObj)
console.table(sandwichesObj)

console.table(friesObj)


document.write(`My favorite sandwich is a ${sandwichesObj.sandwich} which has approximately ${sandwichesObj.calories} calories, along with it I enjoy eating ${friesObj.fries_size} which have about ${friesObj.calories} calories`)