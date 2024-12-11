import { NavLink } from "react-router-dom"

export default function Header() {

    return (
        <header className='bg-light py-3 px-4 shadow'>
            <nav>
                <NavLink to='/' className='text-decoration-none'>
                    <strong>Bool Books</strong>
                </NavLink>
            </nav>
        </header>
    )
}