// import load from '../assets/images/deskk.gif';
import load from "../assets/images/anime.gif";
import {redirect} from "react-router-dom";



function Main() {
    return(
        <div>
            <script>
                function redirect(){
                    setTimeout(()=>{
                        document.location.href='/home'
                    },3000)
                }
            </script>
            <div id={'Maindiv'} className={'visible'} >
                <h1>Welcome to my Portfolio.......</h1>
                <img className={'img-fluid animate'} src={load} alt="Loading..." id={'mainimg'} onAnimationEnd={()=>redirect()
                }/>
            </div>

        </div>

    )
}
export default Main;