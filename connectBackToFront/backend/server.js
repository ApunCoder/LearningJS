import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send("Server Ready!");
// });

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "First Joke",
            content: "The First Joke"
        },
        {
            id: 2,
            title: "Second Joke",
            content: "The Second Joke"
        },
        {
            id: 3,
            title: "Third Joke",
            content: "The Third Joke"
        },
        {
            id: 4,
            title: "Fourth Joke",
            content: "The Fourth Joke"
        }
    ]
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});