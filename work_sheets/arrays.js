const steps = ["one", "two", "three"];

const listTemplate = (step) => {
    return `<li>${step}</li>`;
};

const stepsHtml = steps.map(listTemplate);
// document.querySelector("#myList").innerHTML = stepsHtml.join(''); 

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}



const gpaPoints = grades.map(convertGradeToPoints);
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// document.querySelector("#myList").innerHTML = gpa; 

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
console.log(shortWords)

// document.querySelector("#myList").innerHTML = shortWords;

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);

document.querySelector("#myList").innerHTML = luckyIndex;