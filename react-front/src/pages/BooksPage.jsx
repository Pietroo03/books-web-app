import BookCard from "../components/BookCard"
import Banner from '../components/Banner'

export default function BooksPage() {

    const books = [
        {
            id: 1,
            title: 'Book Title 1',
            author: 'Some Author 1',
            overview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam.'
        },
        {
            id: 2,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            overview: 'Gatsby, un uomo ricco e affascinante, sogna di tornare indietro nel tempo per essere con l\'amata Daisy...'
        },
        {
            id: 3,
            title: '1984',
            author: 'George Orwell',
            overview: 'Un romanzo distopico che racconta la storia di Winston Smith, un uomo che si oppone al Partito del Grande Fratello.'
        },
        {
            id: 4,
            title: 'Il Signore degli Anelli',
            author: 'J.R.R. Tolkien',
            overview: 'Un viaggio fantastico attraverso il mondo di Middle-earth, per salvare la Terra da Sauron e dalla sua spada insanguinata.'
        },
        {
            id: 5,
            title: 'Il Nome della Rosa',
            author: 'Umberto Eco',
            overview: 'Un romanzo storico che segue le indagini di un frate francescano per risolvere il misterioso omicidio di un amico.'
        },
        {
            id: 6,
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            overview: 'Un giovane ragazzo si trova a dover affrontare la realtà della vita adulta, mentre cerca di mantenere la sua innocenza e la sua libertà.'
        },
        {
            id: 7,
            title: 'Il Padrino',
            author: 'Mario Puzo',
            overview: 'La storia dei Corleone, una famiglia mafiosa italiana che si deve confrontare con le sfide della criminalità organizzata e della guerra civile.'
        },
        {
            id: 8,
            title: 'Il Giro del Mondo in 80 Giorni',
            author: 'Jules Verne',
            overview: 'Un avventuroso viaggio intorno al mondo, per dimostrare che è possibile raggiungere la meta con coraggio e determinazione.'
        },
        {
            id: 9,
            title: 'La Divina Commedia',
            author: 'Dante Alighieri',
            overview: 'Un poema epico che descrive il viaggio dell\'autore attraverso l\'Inferno, il Purgatorio e il Paradiso.'
        },
        {
            id: 10,
            title: 'Il Segreto di Sherlock Holmes',
            author: 'Sir Arthur Conan Doyle',
            overview: 'Un classico detective con la sua amata fidanzata Irene Adler, per risolvere i misteri più insoliti e più insidiosi.'
        }
    ];

    return (
        <>

            <Banner title={'Bool Books'} subtitle={'The nerdest book community'} leadtext={'Lorem ipsum dolor sit amet consectetur adipisicing.'} />

            <section className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {
                            books.map(book => {

                                <div className="col" key={book.id}>
                                    <BookCard book={book} />
                                </div>

                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
