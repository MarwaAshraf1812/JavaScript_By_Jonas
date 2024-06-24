/* Write your code below. Good luck! 🙂 */

/*
  calculate the average of 3 values,
  add them all together and divide them by 3.

  To check if number A is at least double number B,
  check for A >= 2 * B. Apply this to the team's average scores.
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);


function checkWinner(avgDolphins , avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }

}

console.log(checkWinner(scoreDolphins, scoreKoalas));
