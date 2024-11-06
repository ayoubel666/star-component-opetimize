import { FaStar } from "react-icons/fa";
import "./star.css"
import {useState} from "react"

function Stars(){
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0) ;

    const ten = [0,1,2,3,4,5,6,7,8,9] ;
    const handleMouseOver = (key) => {
        setHover(key + 1)
    }

    const handleMouseLeave = () => {
        setHover(0)
    }

    const handleClick = (key) => {
        setRating(key + 1)
    }

    return(
       <div onMouseLeave={handleMouseLeave} className="stars">
            {
                ten.map((ele) => {
                    return <FaStar key={ele} onClick={() => handleClick(ele)}  onMouseOver={() => handleMouseOver(ele)} 
                    className={`star ${ele < (hover || rating) ? "gold" : ""}`} />
                })
            }   
        </div>
    )
}

export default Stars ;