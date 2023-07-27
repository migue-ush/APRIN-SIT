import Navbar from "./Navbar"
import ImgFirst from '/public/img/img-first.jpg'

const Home = () => {
return (
    <div>
        <Navbar/>
        <img src={ImgFirst} alt="img-first" className=" w-full h-full bg-purple-900"/>
    
    </div>
)
}

export default Home
