// function print(a){
//     console.log(a);
// }

// function generateRandomString(n){
//     let randomString = ''
//     allowed = "abcdefghisklmnABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"
//     for (let x = 0; x < n; x++){
//         let i = Math.floor(Math.random() * allowed.length)
//         randomString += allowed[i]
//     }
//     return randomString
// }

// function editString(index, what, str){
//     a = str.split('');
//     a[index] = what;
//     return a.join('')
// }

// function randApproachText(target){
//     let state = [];
//     let str = 'abcde';
//     for(let i=0; i<target.length; i++) {state.push(false);};
//     let record = [];

//     // while (str != target){
//     for(let z = 0; z < 1000; z++){
//         random = generateRandomString(target.length);

//         for(let i=0; i<target.length; i++){
//             if(target[i] != random[i] && !state[i]){
//                 str = editString(i, random[i], str)
//             }

//             else{
//                 state[i] = true;
//             }
//         }

//         record.push(str);
//         // print(str)
//     }

//     return record
// }

// print(randApproachText('SAKET'))








// allowed = "abcdefghisklmnABCDEFGHIJKLMNOPQRSTUVWXYZ123450!@#$%^&()"
// allowed = allowed.split('')
// randomChar = [];
// charState = [];



// function randomLetters() {
//     randomLetter = Math.floor(Math.random() * allowed.length)
//     return allowed[randomLetter];
// }


// function randomizer(object) {
//    var targetObject = object.split('')

//     for (var i = 0; i <= 20; i++){
//         randomChar.push(randomLetters())
//     }

//    for (var i = 0; i <= targetObject.length - 1; i++) {

//         charState.push('false')

//         if(charState[i] == 'false'){
//             if (targetObject[i] == randomChar[i]) {
//                 console.log(randomChar[i])
//                 targetObject[i] = randomChar[i];
//                 charState[i] = 'true';
//             }

//             else{
//                 targetObject[i] = randomChar[i]
//             }

//             // console.log(targetObject)


//         }
//    }
// }

// randomizer('ABCDEFGHIJKLMNOPQRSTUVWXYZ')















