let posts = require('./posts.json');
let users = require('./users.json');
const fs = require('fs');

let usernames = users.map(user => user.name)
let ids = users.map(user => user.id)

let postids = posts.map(post => post.id)
let titles = posts.map(post => post.title)
let userids = posts.map(post => post.userId)
let bodies = posts.map(post => post.body)

//Funktio, jolla voidaan selvittää index käyttämällä haluttuja parametrejä
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
let finalArr = [];

for (i = 1; i <= ids.length; i++) {
    let jsonArr = [];
    let jsonUser = users[i - 1];

    finalArr.push(jsonUser);

    let index = indexOfAll(userids, i);
    for (j = 0; j < index.length; j++) {

        //Annetaan parametreille oikeat indeksit
        let indexeduserids = userids[index[j]]
        let indexedpostids = postids[index[j]]
        let indexedtitles = titles[index[j]];
        let indexedbodies = bodies[index[j]]

        //JSON käännös
        let jsonUserId = JSON.stringify("userId: " + indexeduserids + ",")
        let jsonPostId = JSON.stringify("id: " + indexedpostids + ",")
        let jsonTitle = JSON.stringify("title: " + indexedtitles + ",")
        let jsonBody = JSON.stringify("body: " + indexedbodies + ",")

        let jsonObj = { userId: indexeduserids, id: indexedpostids, title: indexedtitles, body: indexedbodies }
        jsonArr.push(jsonObj);

    }
    finalArr.push(jsonArr);




}

finalString = JSON.stringify(finalArr);
fs.writeFileSync('output.json', finalString);



