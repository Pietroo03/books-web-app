export default function Footer() {

    return (
        <footer className="bg-primary py-5 text-white">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">

                    <div className="col">
                        <h3>lorem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex autem earum at sed aliquam repudiandae eveniet minima debitis sint repellendus.
                        </p>
                    </div>

                    <div className="col">
                        <h4>Menu</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white"></a></li>
                            <li><a href="#" className="text-white"></a></li>
                            <li><a href="#" className="text-white"></a></li>
                            <li><a href="#" className="text-white"></a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Legal Stuff</h4>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white"></a></li>
                            <li><a href="#" className="text-white"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}