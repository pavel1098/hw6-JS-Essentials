/**
 * 1. A function which prints str after n seconds.
 */
function printTimeout(str, n) { 
	let result = setTimeout(() => {
		console.log (str);
	}, n * 1000);
	return result; 
}
printTimeout('hello', 3) // hello will appear after 10secs in console



/**
 * 2. A function which returns sum of all numbers from 1 to n using recursion.
 */
function sumAll(n) {
	if (n != 1) {
		return n + sumAll(n - 1);
	} else {
		return n;
	} 
}
console.log (sumAll(2)); // 3
console.log (sumAll(100)); // 5050



/**
 * 3. A function which takes str and time in seconds as arguments, 
 * then every second it should count down from time to 0 
 * and print current time to console when time equals to 0 it prints str
 */
function bombTimer(str, time) {
    let countdown = setInterval (() => {
      if (time > 0) {
        console.log(time);
    	time --;
    } else {
    	console.log(str);
    	clearInterval(countdown);
    }
  }, 1000);
 }
  
bombTimer('Boooom', 5);




/**
 * 4. A function which returns factorial of number using recursion.
 */
function factorial(n) { 
	if (n != 1) {
		return n * factorial(n - 1);
	} else {
		return n;
	}
}

console.log(factorial(5));


/**
 * 5. Implement function from task №3 (bombTimer) using recursion and setTimeout.
 */
function bombTimer(str, time) {
    setTimeout (() => {
    	if (time > 0) {
	        console.log(time);
	    	return bombTimer (str, time - 1);
      	} else {
    		console.log(str);
    	}
  	}, 1000);
}

bombTimer('Boom', 3);



/**
 * 6. A function which takes an array of numbers and maxNumber, 
 * the function returns new array with numbers not higher than maxNumber.
 */
function filterNumbers(arr, maxNumber) { 

	let newArr = arr.filter((number) => {
		return number < maxNumber;
	});
	
	return newArr;
}

console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1])



/**
 * 7. A function that returns object with min and max numbers from array of numbers.
 */
function minMax(arr) {
	return obj = {
		max: Math.max(...arr),
		min: Math.min(...arr)
	};
 }
console.log(minMax([1, 4, 8, 2, 20])); // { max: 20, min: 1 }


/**
 * 8. A function that returns average of numbers in array.
 */
function average(arr) {
	
	let result = arr.reduce((sum, current) => {
		return sum + current;
	}, 0);

	return Math.round((result /= arr.length)*100)/100;
 }
console.log(average([1,4,2])) ;// 2.33



 /**
  * 9. A function which concats all first-nested arrays in one array (use reduce):
  */
function concatFirstNestedArrays(arr) {
	let result = arr.reduce((newArr, current) => {
		return newArr.concat(current);
	}, []);
	return result;
}
console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5]


 /**
  * 10. A function accepts array of users and returns object of users 
  * where key is user id and value user data.
  */
const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-3-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];

function usersToObject(users) {
	let obj = {};
  
  users.forEach((user) => {
  	obj[user.id] = user;
  });
  
  return obj;
}

console.log(usersToObject(users));
// {
//  1: { id: 1, name: 'John', birthday: '1999-2-12' },
//  2: { id: 2, name: 'Bill', birthday: '1999-1-19' },
//  3: { id: 3, name: 'Carol', birthday: '1999-3-11' },
//  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
// };




/** 
 *11. A function returns array of users that have birthdays in a specific month.
 */
const users = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-2-22' }
];


function filterUsersByMonth (users, month) {
	let obj = {};
	
	users.forEach ((user) => {
		let date = new Date(user.birthday);
		if(date.getMonth() == month)
			return obj = user;
	});
	return obj;
}

console.log(filterUsersByMonth(users, 0)) // [{ name: 'Bill', birthday: '1999-1-19' }];



/**
 * 12. A function returns name and age of users separated by comma that are older than 18.
 */
const users = [
  { name: 'John', birthday: '1999-6-12' },
  { name: 'Bill', birthday: '2005-5-19' },
  { name: 'Carol', birthday: '2003-10-11' },
  { name: 'Luce', birthday: '2000-11-22' }
];

function getAdultNames(users) { 
	
	let arr = [];
	let dateNow = new Date();
	let fullYear = dateNow.getFullYear();

	users.forEach((user) => {
		let date = new Date(user.birthday);
		let userYear = date.getFullYear();

		years = fullYear - userYear; 
		if (years >= 18) {
			return arr += user.name + ' ' + years + '\n';
		}
	});
	
	return arr;

}
console.log(getAdultNames(users)); // 'John 19, Luce 18'

