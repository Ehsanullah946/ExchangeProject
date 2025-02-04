import { Link } from "react-router-dom"
function Home() {
    return (
        <div>
             Home page
            <Link to="/main" className="cta">start tracking now</Link>
        </div>
    )
}

export default Home
