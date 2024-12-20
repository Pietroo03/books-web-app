const connection = require('../database/connection');

/** Index callback */
function index(req, res) {

    connection.query(`SELECT * FROM books`, (err, results) => {
        if (err) return res.status(500).json({ err: err })

        res.json({
            books: results,
            count: results.length
        })

    })

}

/* Show callback */
function show(req, res) {

    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ?`;

    // get all reviews for a book
    const reviewsSql = `SELECT * FROM reviews WHERE book_id=?`


    // get the book by the given id
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ err: err })
        if (results.length == 0) return res.status(404).json({ err: 'book not found' })

        // get all reviews associated to the book
        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ err: err })

            const book = {
                ...results[0],
                reviews: reviewsResults
            }

            res.json(book)

        })

    })

}

function review(req, res) {
    const book_id = Number(req.params.id)
    const { username, review, vote } = req.body

    const now = new Date()
    console.log(now);

    const reviewDate = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`
    console.log(reviewDate);

    const sql = "INSERT INTO `reviews` SET username=?, review=?, vote=?, book_id=?, date=?"
    connection.query(sql, [username, review, vote, book_id, reviewDate], (err, results) => {
        if (err) return req.status(500).json({ error: err })
        return res.status(201).json({ success: true })
    })

}

module.exports = {
    index,
    show,
    review
}