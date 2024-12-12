import Banner from '../components/Banner'
import BookCard from "../components/BookCard"
import { useState, useEffect } from 'react'

export default function BooksPage() {

    const base_books_api_server = 'http://localhost:3000/api/books'
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(base_books_api_server)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data.books)
            }).catch(err => console.error(err)
            )
    }, [])
    return (
        <>

            <Banner title="Bool Books" subtitle="The nerdest book community" leadtext="Lorem ipsum dolor sit amet consectetur adipisicing." />

            <section className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {
                            books.map(book => (

                                <div className="col" key={book.id}>
                                    <BookCard book={book} />
                                </div>

                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
