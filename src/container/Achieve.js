

import table from "../assets/images/table.png";
import interviewbit from "../assets/images/interviewbit.jpg";
import leetcode from "../assets/images/LeetCode.png";
import gfg from "../assets/images/gfg.svg";

function Achieve(){
    return(
        <div className={'container d-flex pt-5 flex-column align-items-center'}>
            <h2 className={'text-center title-word title-word-1'}>Achievements</h2>
            <div className={'row container pt-5 m-0 justify-content-between'}>
                <div className={'col-lg-6 mb-5 reveall d-flex justify-content-center align-items-center'}>
                    <img className={'img-fluid'} src={table} alt="Loading..." id={'tableimg'}/>
                </div>
                <div className={'col-lg-6 py-4 educationbox d-flex flex-column justify-content-center'}>
                    <h5 className={'px-5 mb-3 text-center'}>Solved 425+ coding problems on different coding platforms </h5>
                    <div className={'row achieveimgsdiv justify-content-between d-flex'}>
                        <div className="col-6 d-flex">
                            <img className={'img-fluid w-25 p-1'} src={leetcode} alt="Loading..."/>
                            <h6 className={'m-auto text-center'}>Leetcode</h6>
                        </div>
                        <p className={'col-6 m-auto text-center'}>165+ problems solved</p>
                    </div>
                    <div className={'row achieveimgsdiv justify-content-between d-flex '}>
                        <div className="col-6 d-flex">
                            <img className={'img-fluid w-25 py-2'} src={interviewbit} alt="Loading..."/>
                            <h6 className={'m-auto'}>InterviewBit</h6>
                        </div>
                        <p className={'col-6 m-auto text-center'}>85+ problems solved</p>
                    </div>
                    <div className={'row achieveimgsdiv justify-content-between align-items-center d-flex '}>
                        <div className="col-6 d-flex">
                            <img className={'img-fluid w-25 px-1 py-4'} src={gfg} alt="Loading..."/>
                            <h6 className={'m-auto'}>GeeksforGeeks</h6>
                        </div>
                        <p className={'col-6 m-auto text-center'}>175+ problems solved</p>
                    </div>
                    <p className={'container p-4'}><i>&lt;
                        Occupying first place at university leaderboard of interviewbit in terms of score of coding questions solved.
                        &gt;</i></p>
                </div>
                <p className={'container-fluid pt-5'}>
                    <hr/>
                </p>
            </div>
        </div>
    )
}
export default Achieve;