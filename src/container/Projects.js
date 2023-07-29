
function Projects() {
    return(
        <div>
            <div id={'Projects'} className={'container mt-5'}>
                <h2 className={'text-center title-word title-word-1'}>Projects & Trainings</h2>
                <div className="row mt-5">
                    <div className="col-lg-6 my-2 relative">

                        <div className={'projectbox reveall py-5 px-3'}>
                            <div className={'project-arrow'}>
                                <a className={'project-link'} href={'/My-Portfolio'}>→</a>
                            </div>
                            <h4 className={'mb-3'}>PaloAlto-(PCCET) Cyber & Network Security ! </h4>
                            <p className={'mt-2'}>🚀 An in-house training for Entry-Level technician, where I deeply dived into Cyber, Network as well as Cloud Security .</p>
                            <ul className={'dev-icons d-flex'}>
                                <li className={'m-2'}>certificates - </li>
                                <a href={'https://drive.google.com/file/d/18IocFRk34WeqHonZoKHJHX1TL3gztuqB/view?usp=drivesdk'}  ><li className={'m-2'}>Cyber Security</li></a>
                                <a href={'https://drive.google.com/file/d/18KzkYcdX7aAWlJxk9tyx6fePheMGx7xV/view?usp=drivesdk'}  ><li className={'m-2'}>Network Security</li></a>
                                <a href={'My-Portfolio'}><li className={'m-2'}>Cloud Security</li></a>
                                <a href={'/'}><li className={'m-2'}>Final certificate</li></a>
                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-6 my-2 relative">

                        <div className={'projectbox reveall py-4 px-3'}>
                            <div className={'project-arrow'}>
                                <a className={'project-link'} href={'https://devansheegupta.github.io/My-Portfolio/'}  >→</a>
                            </div>
                            <h4 className={'mb-4'}>MyPortFolio! (Project)</h4>
                            <p className={'mt-2'}>🚀 A Portfolio that showcase my work and skills as a frontend developer.</p>
                            <ul className={'dev-icons d-flex'}>
                                <li className={'m-2'}>HTML</li>
                                <li className={'m-2'}>CSS</li>
                                <li className={'m-2'}>JavaScript</li>
                                <li className={'m-2'}>Bootstrap</li>
                                <li className={'m-2'}>React</li>
                            </ul>

                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-6 my-2 relative">
                        <div className={'projectbox reveall py-5 px-3'}>
                            <div className={'project-arrow'}>
                                <a className={'project-link'} href={'https://devansheegupta.github.io/Netflix-ClonePage/'}  >→</a>
                            </div>
                            <h4 className={'mb-3'}>NetFlix - HomePage Clone! (Project)</h4>
                            <p className={'mt-2'}>A Home Page Clone of NetFlix Website, deployed on Github Pages
                            </p>
                            <ul className={'dev-icons d-flex'}>
                                <li className={'m-2'}>HTML</li>
                                <li className={'m-2'}>CSS</li>
                                <li className={'m-2'}>JavaScript</li>
                                <li className={'m-2'}>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 relative my-2">
                        <div className={'projectbox reveall py-5 px-3'}>
                            <div className={'project-arrow'}>
                                <a className={'project-link'} href={'https://devansheegupta.github.io/Juicy-World/'}  >→</a>
                            </div>
                            <h4 className={'mb-3'}>Juicy World! (Project)</h4>
                            <p className={'mt-2'}>A Juice Delivering Website providing varieties of Juices at your DoorStep .</p>
                            <ul className={'dev-icons d-flex'}>
                                <li className={'m-2'}>HTML</li>
                                <li className={'m-2'}>CSS</li>
                                <li className={'m-2'}>JavaScript</li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    ) ;
}
export default Projects;