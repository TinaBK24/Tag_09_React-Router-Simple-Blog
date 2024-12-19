import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="home">
            <img src="./img/photo-1512295767273-ac109ac3acfa 1.jpg" alt="" />
            <div>
                <h1>Welcome to my simple Blog</h1>
                <Link to={'/blog'}>Go to articles</Link>
            </div>
        </section>
    );
}

export default Home;