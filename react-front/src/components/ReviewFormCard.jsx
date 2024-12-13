import { useState } from "react";


export default function ReviewFormCard({ book_id }) {

    const [username, setUsername] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)

    function HandleFormSubmit(e) {
        e.preventDefault()
        console.log('here');

        const formData = {
            username,
            review,
            vote: rating
        }

        console.log(formData);

        const base_book_api_server = `http://localhost:3000/api/books/${book_id}/review`

        console.log(base_book_api_server);

    }

    return (

        <div className="container">
            <div className="card">
                <div className="card-body">

                    <form onSubmit={HandleFormSubmit}>

                        <div className="mb-3">
                            <input name="username" id="username" type="text" className="form-control" placeholder="Your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                        </div>

                        <div className="mb-3">
                            <textarea className="form-control" name="review" id="review" placeholder="Your review here" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Send</button>

                    </form>

                </div>

            </div>
        </div>
    )
}