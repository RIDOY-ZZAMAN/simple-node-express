const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send("Hellooo from node js");
});
app.listen(port, () => {
    console.log("Listening to port 3000", port);
});

const cors = require('cors');
app.use(cors());
app.use(express.json())


const users = [
    { name: "ridoy", id: 0, age: 30, job: "study" },
    { name: "ridoy", id: 1, age: 30, job: "study" },
    { name: "rakib", id: 2, age: 30, job: "study" },
    { name: "ridoy", id: 3, age: 30, job: "study" },
    { name: "ridoy", id: 4, age: 30, job: "study" },
    { name: "ridoy", id: 5, age: 30, job: "study" },
    { name: "ridoy", id: 6, age: 30, job: "study" },
    { name: "zx", id: 7, age: 30, job: "study" },

]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Hitting the post", req.body);
    // res.send("Inside the post");
    res.json(newUser);
})

