import React from "react";

function Header() {
    return (
        <div>
            <intro>
                <div>
                    <a href="https://miskowron.github.io/Mini-Project-wk2/">
                        <img id="intro" src="assets/csscheatsheet.jpg"
                            alt="demo" /></a>
                </div>
            </intro>

            <about>
                <h1> <a id="aboutme">About Me</a></h1>
            </about>
            <div>
                <img id="profile" src="./assets/248351710_5117795504902490_7657565064064748629_n.jpg"
                    alt="Profile Picture" />
            </div>
            <content>
                <p>
                    My name is Mike Skowron. I'm from Tucson Az, and I'm 30 years old. I am currently enrolled at the University of Arizona coding bootcamp.
                    Although I have less than 6 months of coding experience, I intend to absorb as much knowledge as possible and leave this class, a competent coder and web developer.
                    My current background is in retail, where I have worked the past 10 years, building my people skills and work ethic.
                    What I enjoy most about coding so far is seeing my vision take form and solving problems along the way.
                </p>
            </content>
        </div>
    )
}

export default Header;

