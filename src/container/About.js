
import desk from "../assets/images/anime2.gif";
function About() {
    return(
        <div>
            <div id={'About'} className={'row d-flex h-100'}>
                <div id={'wavediv'} className={'col-lg-6'}>
                    <img className={'img-fluid w-75 m-auto'} src={desk} alt="Loading..." id={'comeout'}/>
                </div >
                <div className={'col-lg-4 d-flex  flex-column py-4 justify-content-center reveall'}>
                    <h1 className={'d-flex justify-content-center'} id={'Aboutheading'}>
                        <span className="nametag title-word title-word-3">
                            Hii,&nbsp;
                        </span>
                        <span className="nametag title-word title-word-2">
                            I'm&nbsp;
                        </span>
                        <span className="nametag title-word title-word-1">
                            Devanshee
                        </span>
                    </h1>
                    <div className={'text-center'}>
                        a Web Developer
                    </div>
                    <p id={'infobox'} className={'container mt-4 text-center'}>
                        An Avid learner with firm grip on Web Development.<br/>
                        Proficient in C/C++, Python, intuitive problem solving and creative thinking.<br/>
                        <br/>
                        Learning, Exploring and Experiencing!
                    </p>
                    <p className="text-center mt-5">
                        <a className="btn button m-2" href={'/My-Portfolio/contact'}>Contact me</a>
                        <a className="btn button m-2" href={'https://drive.google.com/file/d/18Oi6zW393INCFDd-e-ktPQ4LH7oL-JKE/view'} target={'__blank'}>See My resume</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About;