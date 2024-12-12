import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import ReviewCard from '../components/ReviewCard'

export default function SingleBook() {

    const { id } = useParams()

    const base_book_api_server = `http://localhost:3000/api/books/${id}`
    const [book, setBook] = useState(null)

    useEffect(() => {
        fetch(base_book_api_server)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBook(data)
            }).catch(err => console.error(err)
            )
    }, [])

    return (

        <>

            <Banner title={book?.title} subtitle={`By ${book?.author}`} leadtext={book?.abstract} />

            <section className='reviews'>
                <div className="container">
                    {book && book.reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
                </div>

            </section>

        </>
    )
}