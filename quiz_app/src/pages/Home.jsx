
import { Navigate, useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    const handleOnClick = ()=>{
        navigate('/quiz');
    }
    return(
    <>
    <div className='text-center text-white mt-12'>

        <h1 className="text-8xl"> Welcome To The Quiz 🎓</h1>
        <p className="text-2xl mt-8"> Shall We Start The Test? </p>
        <button className="bg-red-600 p-1 rounded-xl mt-4" onClick={handleOnClick}> Start </button>

    </div>
     
    </>
    )
     
 }


export default Home;