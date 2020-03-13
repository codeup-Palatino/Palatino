(function(){
    "use strict";


    // ~~~~~~~~~~~~Hard Edabit #1~~~~~~~~~~~~~~

/*
    Reverse the Odd Length Words
    Given a string, reverse all the words which have odd length. The even length words are not changed.

        Examples
    reverseOdd("Bananas") ➞ "sananaB"

    reverseOdd("One two three four") ➞ "enO owt eerht four"

    reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
    Notes
    There is exactly one space between each word and no punctuation is used*/

//
//
//         function reverseOdd(str) {
//         let strArray = str.split(" ");
//         let pushArray = [];
//         strArray.map(n => {
//             if(n.length % 2 === 1){
//                let flip =  n.split("").reverse().join("");
//                 pushArray.push(flip);
//             } else {
//                 pushArray.push(n)
//             }
//         });
//             return pushArray.join(" ");
//     }
//
//     console.log(reverseOdd("Bananas"));
// //        "sananaB"
//
//     console.log(reverseOdd("One two three four"));
//     // "enO otw eerht four"
//
//     console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
//     // "Make sure you only reverse words of odd length"
//
//

    // ~~~~~~~~~~~~~~~~Hard Edabit 2 ~~~~~~~~~~~~~~~~~

    // Oddish vs. Evenish
    // Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
    //
    //     For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
    //
    // Examples


    const oddishOrEvenish = (n) => {
        let number = Array.from(n.toString()).map(Number);
        let checking = number.reduce((total, digit) =>{
            return total + digit
        });
        return checking %2 === 0 ? "Evenish" : "Oddish"
    };


    console.log(oddishOrEvenish(43));
    // ➞ "Oddish"

    console.log(oddishOrEvenish(373));
    // ➞ "Oddish"

    console.log(oddishOrEvenish(4433));
    // ➞ "Evenish"
    // Notes
    // N/A


// ~~~~~~~~~~~~~~~~~~~ Very Hard Edabit 3~~~~~~~~~~~~~~~~~~~~~~



    // Happy Numbers
    // Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:
    //
    //     203 -> 13 -> 10 -> 1 -> 1
    // Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.
    //
    //     Not all numbers are happy. If we started with 11, the sequence would be:
    //
    //     11 -> 2 -> 4 -> 16 -> ...
    // This sequence will never reach 1, and so the number 11 is called unhappy.
    //
    //     Given a positive whole number, you have to determine whether that number is happy or unhappy.
    //
    //     Examples
    // happy(203) ➞ true
    //
    // happy(11) ➞ false
    //
    // happy(107) ➞ false
    // Notes
    // You can assume (and it is actually true!) that all positive whole numbers are either happy or unhappy. Any happy number will have a 1 in its sequence, and every unhappy number will have a 4 in its sequence.
    //     The only numbers passed to your function will be positive whole numbers.


    // function happy(n) {
    //     let number = Array.from(n.toString()).map(Number);
    //     let combine = [];
    //     let check = 0;
    //     for(let piece of number){
    //         combine.push(piece ** 2);
    //     }
    //     check = combine.reduce((total, numbers) =>{
    //         return total + numbers
    //     }, 0);
    //     while((check !== 1) && (check !== 4)){
    //         let superCombine = [];
    //         check = Array.from(check.toString()).map(Number);
    //         for(let piece of check){
    //             superCombine.push(piece ** 2);
    //         }
    //         check = superCombine.reduce((total, numbers) =>{
    //             return total + numbers
    //         }, 0);
    //     }
    //     return check === 1
    // }
    //
    //
    // console.log(happy(107));
    // console.log(happy(203));
    // console.log(happy(11));



    // ~~~~~~~~Very Hard Edabit 4~~~~~~~~



    // Persistence
    // The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.
    //
    //     The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.
    //
    //     Create two functions that take an integer as an argument and:
    //
    //     Return its additive persistence.
    //     Return its multiplicative persistence.



    // function additivePersistence(n) {
    //
    // }
    //
    // function multiplicativePersistence(n) {
    //
    // }







    //     Examples: Additive Persistence
    // console.log(additivePersistence(1679583));
    // ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

    // console.log(additivePersistence(123456));
    // ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

    // console.log(additivePersistence(6));
    // ➞ 0
// Because 6 is already a single-digit integer.
//     Examples: Multiplicative Persistence
//     console.log(multiplicativePersistence(77));
    // ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

    // console.log(multiplicativePersistence(123456));
    // ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

    // console.log(multiplicativePersistence(4));
    // ➞ 0
// Because 4 is already a single-digit integer.
//     Notes
//     N/A






    // HARD
    // Fruity Smoothie
    // Create a class Smoothie and do the following:
    //
    // Create a constructor property called ingredients.
    //     Create a getCost method which calculates the total cost of the ingredients used to make the smoothie.
    //     Create a getPrice method which returns the number from getCost plus the number from getCost multiplied by 1.5. Round to 2 decimal places.
    //     Create a getName method which gets the ingredients and puts them in alphabetical order into a nice descriptive sentence. If there are multiple ingredients, add the word 'Fusion' to the end but otherwise, add 'Smoothie'. Remember to change '-berries to '-berry'. See the examples below.


//
//     const prices = {
//         Strawberries: "$1.50", Banana: "$0.50", Mango: "$2.50",
//         Blueberries: "$1.00", Raspberries: "$1.00", Apple: "$1.75",
//         Pineapple: "$3.50"
//     }
// ​
// class Smoothie {
//
// }
//
//     console.log(Smoothie(["Banana"]));

    // s1.ingredients["Banana"]
    //
    // s1.getCost() ➞ "$0.50"
    //
    // s1.getPrice() ➞ "$1.25"
    //
    // s1.getName() ➞ "Banana Smoothie"

    // console.log(Smoothie(["Raspberries", "Strawberries", "Blueberries"]));

    // s2.ingredients ➞ ["Raspberries", "Strawberries", "Blueberries"]
    //
    // s2.getCost() ➞ "$3.50"
    //
    // s2.getPrice() ➞ "$8.75"
    //
    // s2.getName() ➞ "Blueberry Raspberry Strawberry Fusion"
    // Notes
    // Feel free to check out the Resources tab for a refresher on classes.

















// HARD

    // Imgur URL Parser
    // Create a function that takes an imgur link (as a string) and extracts the unique id and type. Return an object containing the unique id, and a string indicating what type of link it is.
    //
    //     The link could be pointing to:
    //
    //     An album (e.g. http://imgur.com/a/cjh4E)
    // A gallery (e.g. http://imgur.com/gallery/59npG)
    // An image (e.g. http://imgur.com/OzZUNMM)
    // An image (direct link) (e.g. http://i.imgur.com/altd8Ld.png)
    // Examples
    // imgurUrlParser("http://imgur.com/a/cjh4E") ➞ { id: "cjh4E", type: "album" }
    //
    // imgurUrlParser("http://imgur.com/gallery/59npG") ➞ { id: "59npG", type: "gallery" }
    //
    // imgurUrlParser("http://i.imgur.com/altd8Ld.png") ➞ { id: "altd8Ld", type: "image" }
    // Notes
    // There are a few cases where the link has some changes. Look at the additional tests in the Tests tab to know


    // const imgurUrlParser = url => {
    //     let result = {
    //         id: "",
    //         type: ""
    //     }
    //
    // };
    //
    //
    //
    // console.log(more.imgurUrlParser("http://i.imgur.com/altd8Ld.png"));
    //
    //
    // console.log(imgurUrlParser("http://imgur.com/gallery/59npG"));
    //
    // console.log(imgurUrlParser("http://imgur.com/a/cjh4E"));

})();