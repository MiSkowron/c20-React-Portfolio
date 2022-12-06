import React from "react";

function Project() {
    return (
        <div>
            <work>
                <h1> <a id="mywork">My Work</a></h1>
            </work>

            <section>

                <div>
                    <a href="https://miskowron.github.io/Claw-vs-Paws/">
                        <img id="example"
                            src="https://user-images.githubusercontent.com/106831265/183315889-5b642d1c-9ac0-444e-9cf0-8d7e940cdb93.png"
                            alt="example 1" /></a>
                </div>

                <div>
                    <a href="https://springbot-game.herokuapp.com/">
                        <img id="example" src="./assets/springbot.png"
                            alt="example 2" /></a>
                </div>

                <div>
                    <a href="#">
                        <img id="example" src="assets/coming-soon-placeholder-image.gif"
                            alt="example 3" /></a>
                </div>

                <div>
                    <a href="#">
                        <img id="example" src="assets/coming-soon-placeholder-image.gif"
                            alt="example 4" /></a>
                </div>

                <div>
                    <a href="#">
                        <img id="example" src="assets/coming-soon-placeholder-image.gif"
                            alt="example 5" /></a>
                </div>

                <div>
                    <a href="#">
                        <img id="example" src="assets/coming-soon-placeholder-image.gif"
                            alt="example 6" /></a>
                </div>

            </section>

            <contact>
                <h1> <a id="contactme">Contact Me</a></h1>
            </contact>

            <p>
                <a href="#"><button type="button">Email</button></a>
                <a href="#"><button type="button">GitHub</button></a>
                <a href="#"><button type="button">Linkedin</button></a>
            </p>

        </div>
    )
}

export default Project;