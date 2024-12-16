// array modify and delete method
// let ary = ["ali", 17, "male", "matric"]
// document.write("before:" +" " + ary + "<br>")
// // Modifying array
// ary[0] = "ahmad"
// document.write("after:" +" " + ary)

// delete array value 
// let ary = ["ali", 17, "male", "matric"]
// document.write("before:" +" " + ary + "<br>")
// // Modifying array
// delete ary[1]
// document.write("after:" +" " + ary )

// array sort function 
// let ary = ['jaleel', 'bilal', 'kamran', 'ali', 'salman']
// document.write("before:" + " " + ary + "<br>")
// ary.sort()
// document.write("after:" + " " + ary)

// reverse function 
// let ary = ['jaleel', 'bilal', 'kamran', 'ali', 'salman']
// document.write("before:" + " " + ary + "<br>")
// ary.reverse()
// document.write("after:" + " " + ary)

// pop function    "it will delete the last value from array"
// let ary = ['jaleel', 'bilal', 'kamran', 'ali']
// document.write("before:" + " " + ary + "<br>")
// ary.pop()
// document.write("after:" + " " + ary)

// push function    "it will add the value at the end of array"
// let ary = ['jaleel', 'bilal', 'kamran', 'ali']
// document.write("before:" + " " + ary + "<br>")
// ary.push('umer')
// document.write("after:" + " " + ary)

// shift function    "it will delete the first value of array"
// let ary = ['jaleel', 'bilal', 'kamran', 'ali']
// document.write("before:" + " " + ary + "<br>")
// ary.shift()
// document.write("after:" + " " + ary)

// shift function    "it will add value in the starting of array"
// let ary = ['jaleel', 'bilal', 'kamran', 'ali']
// document.write("before:" + " " + ary + "<br>") 
// ary.unshift('umer')
// document.write("after:" + " " + ary)

// concat function    "it will add array into another"
// let ary1 = ['jaleel', 'bilal', 'kamran', 'ali']
// let ary2 = ['salman', 'ahmad']
// let ary3 = ary1.concat(ary2)
// document.write(ary3)

// join function    "it will convert array into string"
// let ary = ['jaleel', 'bilal', 'kamran', 'ali']
// document.write('before: ' + ary + '<br>')
// let ary2 = ary.join("-")
// document.write(ary2)

// slice function    "it will pick a part of an array"
// let ary = ['jaleel', 'bilal', 'kamran', 'ali', 'umer' ]
// document.write('before: ' + ary + '<br>')
// let ary2 = ary.slice(1,3)
// document.write('after :' + ary2)

// splice function    "it will add a value in an array wherever you want"
// let ary = ['jaleel', 'bilal', 'kamran', 'ali']
// document.write('before: ' + ary + '<br>')
// ary.splice(2,0, "umer")
// document.write('after :' + ary)

// is Array function    "it will check a value if it's an array or not"
// let ary = ['jaleel', 'bilal', 'kamran', 'ali']
// let num = 10
// let string = 'umer'
// let result = Array.isArray(ary)
// let result = Array.isArray(num)
// let result = Array.isArray(string)
// document.write(result)

// indexOf function    "it will tell the index no of a value but searches from starting"
// let ary = ['jaleel','umer', 'bilal', 'kamran', 'ali', 'umer' ]
// document.write('before: ' + ary + '<br>')
// let ary2 = ary.indexOf('umer')
// let ans = ary.indexOf('umer',2)    // here 2 is the starting point to check from
// document.write('after :' + ans)

// lastIndexOf function    "it will tell the index no of a value but searches from last"
// let ary = ['jaleel','umer', 'bilal', 'kamran', 'ali', 'umer' ]
// document.write('before: ' + ary + '<br>')
// let ans = ary.lastIndexOf('umer')
// let ans = ary.lastIndexOf('umer',3)    // here 3 is the starting point to check from
// document.write('after :' + ans)

// includes() function    "it will search the value if it exist or not"
// let ary = ['jaleel','umer', 'bilal', 'kamran', 'ali', 'umer' ]
// document.write('before: ' + ary + '<br>')
// let ans = ary.includes('umer')
// let ans = ary.includes('usman')
// document.write('answer :' + ans)

// some() function    "it will check if any of the value passes the test or not"
// let ages = [10,8,12,18,20,22]
// document.write(ages + '<br>')
// let result = ages.some(checkAdult)
// document.write(result)
// function checkAdult(age) {
//     return age >= 18
// }

// every() function    "it will check if all the value passes the test or not"
// let ages = [10,8,12,18,20,22]
// // let ages = [12,19,20,22]
// document.write(ages + '<br>')
// let result = ages.every(checkAdult)
// document.write(result)
// function checkAdult(age) {
//     return age >= 10
// }

// find() function    "it will return the very first value that passes the test"
// let ages = [10,12,18,20,22]
// document.write(ages + '<br>')
// let result = ages.find(checkAdult)
// document.write(result)
// function checkAdult(age) {
//     return age >= 15
// }

// findIndex() function    "it will return the very first index no of the value that passes the test"
// let ages = [10,12,18,20,22]
// document.write(ages + '<br>')
// let result = ages.findIndex(checkAdult)
// document.write(result)
// function checkAdult(age) {
//     return age >= 15
// }

// filter() function    "it will create an array for the values the value that passe the test"
// let ages = [10,12,18,20,22]
// document.write(ages + '<br>')
// let result = ages.filter(checkAdult)
// document.write(result)
// function checkAdult(age) {
//     return age >= 15
// }

// toString()      "it will convert the an array into string"
// let ary = ['umer', 'usman', 'ahmad', 'kamran']
// ary.toString()
// document.write(ary)

// forEach()    "it will print the every value of the array" 
// let ary = ['umer','usman', 'kamran', 'ali']
// ary.forEach(function(value, index){
//     document.write(index + " : " + value + "<br>")
// })

