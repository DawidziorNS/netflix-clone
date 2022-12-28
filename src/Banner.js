import './Banner.css'
import {useEffect, useState} from "react";
import axios from "./axios";
import {requests} from "./Requests";

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        }

        fetchData()
    }, [])

    console.log(movie)

    const truncate = (string, n) => {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string
    }

    return <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/800px-Black_flag.svg.png")`,
        backgroundPosition: "center center"
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">Movie Name</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">
                {truncate('This is a test description This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description', 150)}
            </h1>
        </div>
        <div className="banner--fadeBottom"/>
    </header>
}

export default Banner