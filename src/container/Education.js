
import clglogo from "../assets/images/clglogo.jpg";
import gpslogo from "../assets/images/gpslogo.jpg";
import bapnalogo from "../assets/images/bapnalogo.jpg";
function Education() {
    return(
        <div id={'Education'}>

            <div className={'container'}>
                <h2 className={'text-center title-word title-word-1 pt-4'}>Education</h2>
                <div className={'container mt-1'}>
                    <div className="educationbox reveall m-2 p-3 d-flex row">
                        <div className="logocontainer col-lg-2 mx-2 px-2" name="clglogo">
                            <img className={'img-fluid w-100 h-100'} src={clglogo} alt="Loading.."/>
                        </div>
                        <div className={'col-lg-10 d-flex flex-column justify-content-center'}>
                            <h5>Medi-Caps University, Indore</h5>
                            <p>B.Tech in Computer Science and Engineering</p>
                            <p>2020-2024</p>
                            <ul>
                                <li>8.99 Cgpa</li>
                            </ul>

                        </div>
                    </div>
                    <div className="educationbox reveall m-2 p-4 d-flex row">
                        <div className="logocontainer col-lg-2 m-2" name="gpslogo">
                            <img className={'img-fluid w-100 h-100'} src={gpslogo} alt="Loading.."/>
                        </div>
                        <div className={'col-lg-10 d-flex flex-column justify-content-center'}>
                            <h5>Gokuldas Public School, Khargone</h5>
                            <p>2018-2020</p>
                            <ul>
                                <li>91.4% in CBSE 12th class</li>
                                <li>JEE MAINS Rank under 1.5 Lac</li>
                            </ul>
                        </div>

                    </div>
                    <div className="educationbox reveall m-2 p-4 d-flex row">
                        <div className="logocontainer col-lg-2 m-2 " name="bapnalogo">
                            <img className={'img-fluid w-100 h-100'} src={bapnalogo} alt="Loading.."/>
                        </div>
                        <div className={'col-lg-10 d-flex flex-column justify-content-center'}>
                            <h5>Bapna Public School, Khargone</h5>
                            <p>2006-2018</p>
                            <ul>
                                <li>94.8% in MP BOARD 10th class</li>
                                <li>Head Girl for a year in 10th standard</li>
                                <li>Ranked 1st in district level MP TOURISM competition and participated in state level</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}
export default Education;