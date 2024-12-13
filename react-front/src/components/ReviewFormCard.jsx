import { useState } from "react";


export default function ReviewFormCard({ book_id }) {

    const [username, setUsername] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const [success, setSuccess] = useState(null)

    function HandleFormToggle() {
        document.getElementById('form-card').classList.toggle('d-none')
    }

    function HandleFormSubmit(e) {
        e.preventDefault()

        if (username.length < 2 || review.length < 10 || rating == 0) {
            setErrorMessage('Please fill all filds!')
        } else {
            setErrorMessage(null)

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

                    if (data.success) {
                        setSuccess('Tanks for your review <3')

                        setTimeout(HandleFormToggle, 1000)

                        setTimeout(() => setSuccess(null), 3000)
                    }
                })
                .catch(err => console.log(err));
        }
        setUsername('')
        setReview('')
        setRating(0)
    }


    return (

        <div className="container">

            {success && <div className="text-center mb-3">{success}</div>}
            <div className="text-center mb-3">
                <button onClick={HandleFormToggle} className="btn btn-primary">Write a new review</button>
            </div>

            <div id="form-card" className="card mb-4 d-none">
                <div className="card-body">

                    <h3 className="text-center pb-2">Leave your review!</h3>
                    <form onSubmit={HandleFormSubmit}>

                        <div className="mb-3">
                            <label htmlFor="username">User name</label>
                            <input name="username" id="username" type="text" className="form-control" placeholder="Your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="review">Your review</label>
                            <textarea className="form-control" name="review" id="review" placeholder="Your review here" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Send</button>
                            {errorMessage && <span className="text-danger"> {errorMessage}</span>}
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}