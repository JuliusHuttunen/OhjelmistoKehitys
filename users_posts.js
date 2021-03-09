let posts = require('./posts.json');
let users = require('./users.json');

let usernames = users.map(user => user.name)
let ids = users.map(user => user.id)

let titles = posts.map(post => post.title)
let userids = posts.map(post => post.userId)

//Funktio, jolla voidaan selvittää index käyttämällä haluttuja parametrejä
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);


for (i = 1; i <= ids.length; i++) {
    let indexednames = usernames[i - 1];
    console.log(indexednames);
    let index = indexOfAll(userids, i);
    for (j = 0; j < index.length; j++) {
        let indexedtitles = titles[index[j]];
        console.log("- " + indexedtitles);
    }
}

