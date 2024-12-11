import BookCard from "../components/BookCard"

export default function BooksPage() {

    return (
        <>
            <div className="banner bg-primary text-white py-5">
                <div className="container">
                    <h1>Bool Books</h1>
                    <h3>The nerdest book community</h3>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt illo nihil dolor quas rerum! Ad, sed. Temporibus, provident sint nulla odio officia explicabo commodi consequuntur laborum, ab non quia!
                    </p>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        <div className="col">
                            <BookCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}