/**
 * 
 * Should return a promise that resolves with the value after delayInMs
 *
 * @param {any} value 
 * @param {number} delay 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function job(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
}

// Run 'job' function with delays 1000, 2000, 500, 1500 and 
// use Promise.all to print `done ${delay}` in console when every task is done

// put your code here
// Масив затримок згідно з умовою
const delays = [1000, 2000, 500, 1500];

// Створюємо масив промісів
const promises = delays.map(delay => job(delay));

// Чекаємо виконання всіх промісів
Promise.all(promises)
    .then(results => {
        // results - це масив результатів у тому ж порядку, що й вхідний масив promises
        results.forEach(delay => console.log(`done ${delay}`));
    })
    .catch(error => {
        console.error('Щось пішло не так:', error);
    });