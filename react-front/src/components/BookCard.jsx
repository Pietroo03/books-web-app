import { Link } from "react-router-dom"

export default function BookCard() {
    return (
        <div className="book card">
            <div className="card-body">
                <h3>Book Title</h3>
                <span className="text-muted">By <span>Author</span></span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dignissimos.
                </p>
                <Link to='/books/1' className='btn btn-primary'>Read More</Link>
            </div>
        </div>
    )
}