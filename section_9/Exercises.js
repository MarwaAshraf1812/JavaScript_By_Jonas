const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

/*1. Destructure and assign the elements of 
constants array to e, pi, gravity,
humanBodyTemp, waterBoilingTemp.*/

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)


// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor

const [fin, est, sw, den, nor] = countries
// console.log(fin, est, sw, den, nor)

// 3. Destructure the rectangle object by its properties or keys.

const {width, height, area, perimeter} = rectangle
// console.log(width, height, area, perimeter)

/*Iterate through the users array and get all
the keys of the object using destructuring*/

users.forEach(({name, scores, skills, age}) =>
{
    // console.log(name, scores, skills, age)
})

// Find the persons who have less than two skills

const lessThanTwoSkills = users.filter(({skills}) => skills.length < 2)
// console.log(lessThanTwoSkills)

/*
Destructure the countries object print name,
capital, population and languages of all countries
 */

const [name, capital, population, languages] = countries
// console.log(name, capital, population, languages)


/*
A junior developer structure student name,
skills and score in array of arrays which
may not easy to read. Destructure the
following array name to name, skills array
to skills, scores array to scores,
JavaScript score to jsScore and React
score to reactScore variable in one line.
*/

//const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
//console.log(name, skills, jsScore, reactScore)


/*Write a function called convertArrayToObject
which can convert the array to a structure object.*/


const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
console.log(name, skills, jsScore, reactScore)

console.log(name, skills, jsScore, reactScore);

function convertArrayToObject(array) {
    const obj = {}
    array.forEach(([name, skills, scores]) =>
    {
        obj[name] = {skills, scores}
    })
    return obj
}

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

console.log(convertArrayToObject(students))