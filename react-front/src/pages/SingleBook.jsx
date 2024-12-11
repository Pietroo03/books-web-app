import { useParams } from 'react-router-dom'

export default function SingleBook() {

    const { id } = useParams
    return (
        <h1>Single Book id: {id}</h1>
    )
}