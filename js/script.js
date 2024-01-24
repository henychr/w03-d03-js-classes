
// Arrays START

// const thingsToBuy = ['spaghetti', 'tomatoes', 'onions', 'mincemeat'];
// console.log(thingsToBuy[1]);

// for (let i = 0; i < thingsToBuy.length; i++) {
//     console.log(thingsToBuy[i])
// }

// thingsToBuy[3] = 'salami';

// for (let i = 0; i < thingsToBuy.length; i++) {
//     console.log(thingsToBuy[i])
// }

// thingsToBuy[4] = 'oregano';

// console.log(thingsToBuy);

// thingsToBuy[10] = 'chilli';

// console.log(thingsToBuy);

// thingsToBuy.push('basil'); // adds element at the end
// console.log(thingsToBuy);

// thingsToBuy.unshift('salt'); // adds element at the beginning
// console.log(thingsToBuy);

// thingsToBuy.splice(6, 5, 'Parmiggiano'); // add on position 6 , remove 5 positions, write string
// console.log(thingsToBuy);

// thingsToBuy.splice(7, 1);// removes on position 7, 1 element
// console.log(thingsToBuy);

// const shifted = thingsToBuy.shift(0); // removes at he beginning
// console.log(thingsToBuy);
// console.log(shifted); // gives back element which was removed

// thingsToBuy.pop()   // removes at the end

// let element = null;
// while (element !== undefined) {
//     element=thingsToBuy.shift();
//     console.log(element);
// }
// console.log(thingsToBuy);

// Arrays END

// ---------START LOOPING through elements of an Array

const fruits = [
    {
        name: 'apple',
        count: 4
    },
    {
        name: 'pear',
        count: 3
    },
    {
        name: 'orange',
        count: 2
    },
    {
        name: 'popcorn',
        count: 10
    },
    {
        name: 'potatos',
        count: 20
    },

];

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i].name === 'orange') {
//         continue;
//     }
//     console.log(fruits[i]);
//     if (i === 2) {
//         break;
//     }
// }

// fruits.forEach( (element,index)=>{   

//     console.log(element);
//     console.log(index);
// } )
// // note: fruits.forEach(function);

// const names = fruits.map( (element,index)=> {

//    return element.name;

// });
// console.log(names);


// ---------END LOOPING through elements of an Array






