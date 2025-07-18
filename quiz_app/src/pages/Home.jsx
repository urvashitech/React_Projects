
import { Navigate, useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    const handleOnClick = ()=>{
        navigate('/quiz');
    }
    return(
    <>
    <div className='box'>

        <h1 className="heading">Welcome to the Quiz App 🎓</h1>

        <h4 className="para">Shall We Start The Quiz ? </h4>
        <button onClick={handleOnClick}> Start </button>
    </div>
     
    </>
    )
     
 }


export default Home;