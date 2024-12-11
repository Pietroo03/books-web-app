import { Link } from "react-router-dom"

export default function BookCard({ book }) {
    return (
        <div className="book card">
            <div className="card-body">
                <h3>{book.title}</h3>
                <span className="text-muted">By <span>{book.author}</span></span>
                <p>
                    {book.overview}
                </p>
                <Link to={`/books/${book.id}`} className='btn btn-primary'>Read More</Link>
            </div>
        </div>
    )
}