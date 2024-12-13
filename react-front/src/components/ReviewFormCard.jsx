import { useState } from "react";


export default function ReviewFormCard({ book_id }) {

    const [username, setUsername] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)

    function HandleFormToggle() {
        document.getElementById('form-card').classList.toggle('d-none')
    }

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

        fetch(base_book_api_server, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    return (

        <div className="container">

            <div className="text-center mb-3">
                <button onClick={HandleFormToggle} className="btn btn-primary">Write a new review</button>
            </div>

            <div id="form-card" className="card mb-4 d-none">
                <div className="card-body">

                    <h3 className="text-center pb-2">Leave your review!</h3>
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