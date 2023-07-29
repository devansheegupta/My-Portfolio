
import wow from '../assets/images/wow.png';
import cmc from '../assets/images/cmc.jpg';
import clickme from '../assets/images/Click-Me.png';
import React from "react";
function Works() {
    return(
        <div>
            <div id={'Work'} className="container">
                <h2 className={'text-center mt-5 title-word title-word-1'}>Experiences</h2>
                <div className={'d-flex justify-content-center '}>
                    <nav className={'mt-4 w-100'} id={'worknav'}>
                        <button className={'d-flex w-100 justify-content-center align-items-center navbar-toggler btn'} type={'button'} data-bs-toggle={'collapse'} data-bs-target={'#collapsework'} arial-controls={'collapsethis'} aria-expanded={'true'} aria-label={'Toggle navigation'}>

                            <div className="row container p-0  d-flex justify-content-center align-items-center" id={'workbutton'}>
                                <div className={'parentwork'}>
                                <img className={'col-12 img-fluid w-auto p-2'} src={wow} alt="Loading..." id={'wow'}/>
                                <img className={'img-fluid'} src={clickme} alt="Loading..." id={'clickme'}/>
                                </div>
                            </div>

                        </button>
                        <div className="container p-0 justify-content-center">
                            <div className={'collapse navbar-collapse justify-content-center'} id={"collapsework"}>
                                <ul className={'navbar-nav p-0'}>
                                    <div className="d-flex row workdiv p-0 py-3 mx-2 align-items-center">
                                        <div className="logocontainer col-lg-4 mx-2 px-2" name="clglogo">
                                            <img className={'img-fluid w-100'} src={cmc} alt="Loading.."/>
                                        </div>
                                        <div className={'col-lg-8 reveall pt-5 pb-0 d-flex flex-column justify-content-center'}>
                                            <h5>Executive Member at CodeChef Medi-Caps Chapter</h5>

                                            <p><br/>Sep 2021-Present</p>
                                            <ul>
                                                <li>
                                                    <p>
                                                        Organized various Events, fruitful Sessions and conducted Programming Workshops to raise awareness of Problem Solving and Competitive Programming.
                                                    </p>
                                                </li>
                                            </ul>
                                            <hr/>
                                        </div>
                                    </div>
                                </ul>
                            </div>

                            </div>

                    </nav>
                </div>

            </div>
        </div>
    )
}
export default Works;