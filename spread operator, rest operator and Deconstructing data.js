const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const first = {...userPersonalData, ...userGameData};
// console.log(first);



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Make a copy of your new user object but overrode the birthday to december 31st
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const firstly = {...first, birthday: 'jan 21st'}
// console.log(firstly)

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Use the spread operator to make a copy of the accomplishments array and store it i na new variable
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let third = [...firstly.accomplishments];
// console.log(third);




// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
//  4.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

const { favoriteThings: {food: favoriteFoods}} = user
// console.log(favoriteFoods);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Once you have grabbed the favorite foods. Descontrusct the food array to grab only the first 2 values. //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const [firstFood, secondFood] = favoriteFoods;
// console.log('First Food: ', firstFood, '|| Second Food: ', secondFood);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. use object deconstruction and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];
const [name, age, ...food] = data

console.log('Name: ', name);
console.log('Age: ', age);
console.log('Favorite Foods: ', food);
