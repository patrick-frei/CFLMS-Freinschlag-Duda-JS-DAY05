let sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`
let fries = `{ "fries_size": "Large French Fries", "calories": "570" }`

let sandwichesObj = JSON.parse(sandwiches)
let friesObj = JSON.parse(fries)

document.write(`My favorite sandwich is a ${sandwichesObj.sandwich} which has approximately ${sandwichesObj.calories} calories, along with it I enjoy eating ${friesObj.fries_size} which have about ${friesObj.calories} calories`)