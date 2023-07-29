
import skillimg from "../assets/images/sit.png";
import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.jpg";
import js from "../assets/images/js.jpg";
import react from "../assets/images/reactjs.jpg";
import sql from "../assets/images/sql.jpg";
import python from "../assets/images/python.jpg";
import dsa from "../assets/images/dsa.jpg";
import cpp from "../assets/images/cpp.jpg";
import cn from "../assets/images/cn.jpg";
import bstrp from "../assets/images/bstrp.jpg";
import dbms from "../assets/images/dbms.jpg";
import oops from "../assets/images/oops.jpg";

function Skills() {
    return(
        <div>
            <div className={'container pt-4'}>
                <div id={'skillsdiv'} className="row m-0 p-1 text-center">
                    <div className="col-lg-6 p-0 d-flex flex-column justify-content-center">
                        <h1 className={'mb-4'}>What I do</h1>
                        <h5 className={'my-4'}>
                            PASSIONATE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
                        </h5>
                        <div className={'d-flex flex-column align-items-center'}>
                            <ul>
                                <li>Develop Interactive FRONT-END For WEB Applications</li>
                                {/*<li>Connect Front-End with Database of the System</li>*/}
                            </ul>
                        </div>
                        <hr/>
                        <p className={'my-5'}>-| My Skills |-</p>
                        <div className={'reveall'}>
                            <ul className="dev-icons d-flex flex-wrap flex-row">
                                <li className="col-2 skill-icon" name="dsa"><img className="img-fluid" alt="loading.." src={dsa}></img>
                                    <p>DSA</p>
                                </li>
                                <li className="col-2 skill-icon" name="cpp"><img className="img-fluid" alt="loading.." src={cpp}></img>
                                    <p>C/C++</p>
                                </li>
                                <li className="col-2 skill-icon" name="cn"><img className="img-fluid" alt="loading.." src={cn}></img>
                                    <p>Computer<br/>Networks</p>
                                </li>
                                <li className="col-2 skill-icon" name="dbms"><img className="img-fluid" alt="loading.." src={dbms}></img>
                                    <p>DBMS</p>
                                </li><li className="col-2 skill-icon" name="oops"><img className="img-fluid" alt="loading.." src={oops}></img>
                                    <p>OOPS</p>
                                </li>
                                <li className="col-2 skill-icon" name="html-5"><img className="img-fluid" alt="loading.." src={html5}></img>
                                    <p>HTML5</p>
                                </li>
                                <li className="col-2 skill-icon" name="css3"><img className="img-fluid" alt="loading.." src={css3}></img>
                                    <p>CSS3</p>
                                </li>
                                <li className="col-2 skill-icon" name="JavaScript"><img className="img-fluid" alt="loading.." src={js}></img>
                                    <p>Java- Script</p>
                                </li>
                                <li className="col-2 skill-icon" name="bstrp"><img className="img-fluid" alt="loading.." src={bstrp}></img>
                                    <p>Boot- Strap</p>
                                </li>
                                <li className="col-2 skill-icon" name="reactjs"><img className="img-fluid" alt="loading.." src={react}></img>
                                    <p>Reactjs</p>
                                </li>

                                <li className="col-2 skill-icon" name="Mysql-database"><img className="img-fluid" alt="loading.." src={sql}></img>
                                    <p>Mysql</p>
                                </li>

                                <li className="col-2 skill-icon" name="python"><img className="img-fluid" alt="loading.." src={python}></img>
                                    <p>Python</p>
                                </li>

                            </ul>
                        </div>


                    </div>
                    <div className="col-lg-6 d-flex p-0 justify-content-center align-items-center">
                        <img className={'img-fluid'} src={skillimg} alt="Loading..." id={'sitimg'}/>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Skills;