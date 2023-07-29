import loc from '../assets/images/location.jpg';
import profile from '../assets/images/profile.jpg';

function Contact(){
    return(

        <div className={'container py-5'}>
            <h3 className={'text-center mb-5'}>Reach Out to Me!</h3>
            <div id={'Contact'} className="row d-flex pt-3 p-2 justify-content-center align-items-center">
            <div className={'container col-md-7 d-flex flex-column justify-content-center'}>
                <p className={'text-center'}>DISCUSS ABOUT SOMETHING OR JUST WANT TO SAY HII ? MY INBOX IS OPEN FOR ALL.</p>
                <div className={'d-flex justify-content-center'}>
                    <img className={'img-fluid locicon'} src={loc} alt="Loading..."/>
                    <h6 className={'px-4 py-1'}><i>Indore, Madhya Pradesh, India</i></h6>
                </div>
                <div className="text-center p-2">
                    <a href="https://www.linkedin.com/in/devanshee-gupta-119250215" target={'_blank'} className={'mx-2 locicon'}>
                        <box-icon type='logo' name='linkedin-square'></box-icon>
                    </a>
                    <a href="https://github.com/devansheegupta" target={'_blank'} className={'mx-2 locicon'}>
                        <box-icon type='logo' name='github'></box-icon>
                    </a>
                    <a href="mailto:devansheegupta0@gmail.com" target={'_blank'} className={'mx-2 locicon'}>
                        <box-icon type='logo' name='gmail' ></box-icon>
                    </a>

                </div>
                <div className={'row reveall d-flex justify-content-center mt-3'}>
                    <h4 className={'text-center'}>MY Coding Profile Links</h4>
                    <div className={'text-center mt-4'} id={'codingdiv'}>

                            <a href="https://leetcode.com/DevansheeGupta/" target={'_blank'}>
                                <li className={'m-0 p-1 text-center'}>Leetcode</li>
                            </a>

                            <a href="https://www.interviewbit.com/profile/devansheegupta0_3477ecda8c1f" target={'_blank'}>
                                <li className={'m-0 p-1 text-center'}>InterviewBit</li>
                            </a>


                            <a href="https://auth.geeksforgeeks.org/user/devansheegupta0/" target={'_blank'}>
                                <li className={'m-0 p-1 text-center'}>GeeksforGeeks</li>
                            </a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 reveall mb-4 d-flex justify-content-center align-items-center">
                <img
                    src={profile}
                    alt="Devanshee Gupta" className="profile-image"/>
            </div>
            </div>

        </div>
    )
}

export default Contact;