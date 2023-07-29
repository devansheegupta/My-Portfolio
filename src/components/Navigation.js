import React from "react";

function Navigation() {
    return(
        <div className={''}>
            <div id={"nav-title"}>
                <h5 className={'m-2 pt-1 px-1'}>
                    <span className={'title-word title-word-2'}>&nbsp; PortFolio</span>
                    <span className={'title-word title-word-3'}>! &nbsp;</span>
                </h5>
            </div>
                    <nav className={'navbar navbar-expand-lg'}>
                        <div className="container-fluid d-flex justify-content-end">
                            <div className={'collapse navbar-collapse justify-content-end'} id={"collapsethis"}>
                                <ul className={'navbar-nav p-0'}>
                                    <li className={'nav-item text-center active px-3'}>
                                        <a className={'nav-link'} href={'/My-Portfolio/home'}>
                                            Home
                                        </a>
                                    </li>
                                    <li className={'nav-item text-center px-3'}>
                                        <a className={'nav-link'} href={'/My-Portfolio/skills'}>
                                            Skills
                                        </a>
                                    </li><li className={'nav-item text-center px-3'}>
                                        <a className={'nav-link'} href={'/My-Portfolio/education'}>
                                            Education
                                        </a>
                                    </li>
                                    <li className={'nav-item text-center px-3'}>
                                        <a className={'nav-link'} href={'/My-Portfolio/works'}>
                                            Other Experiences
                                        </a>
                                    </li>
                                    <li className={'nav-item text-center px-3'}>
                                        <a className={'nav-link'} href={'/My-Portfolio/projects'}>
                                            Projects & trainings
                                        </a>
                                    </li>
                                    <li className={'nav-item text-center  px-3'}>
                                        <a className={'nav-link'} href={'/My-Portfolio/achieve'}>
                                            Achievements
                                        </a>
                                    </li>
                                    <li className={'nav-item text-center px-3'}>
                                        <a className={'nav-link'} href={'/My-Portfolio/contact'}>
                                            Contact me
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <button className={'navbar-toggler m-2 btn'} type={'button'} data-bs-toggle={'collapse'} data-bs-target={'#collapsethis'} arial-controls={'collapsethis'} aria-expanded={'false'} aria-label={'Toggle navigation'}>
                                <span className={'navbar-toggler-icon'}></span>
                            </button>
                        </div>


                    </nav>

        </div>
    )
}

export default Navigation;