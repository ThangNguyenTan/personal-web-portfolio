export const projects = [
    {
        linkHref: "https://www.labmi.io/",
        demoImageURL: "https://imgur.com/lYyZA9O.png",
        projectName: "LabMI",
        projectDescriptionFunction: () => (
            <>
                <span className="text-white">Tech Stack:</span> React.js, Bootstrap, React Query, Docker, Python,
                FastAPI
                <br />
                <span className="block my-2"></span>
                <span className="text-white">Project Details:</span> This is a freelance project
                that I and a friend completed in the second half of 2022. We
                were hired by a client to create a website for a university in
                Korea, where the admin can post research-related content. The 
                 {` project's`} main goal was to showcase the work done by the
                professors in LabMI.
                <span className="block my-2"></span>
                <span className="text-white">My Responsibility: </span>
                <ul>
                    <li>
                        Discuss and negotiate with Korean clients about the design
                    </li>
                    <li>
                        Realize the design into React.js codes
                    </li>
                    <li>
                        Deploy onto production Linux server and setup SSL certificates for HTTPS connections
                    </li>
                    <li>
                        Cooperate with back-end team to integrate the application
                    </li>
                    <li>
                        Build docker containers to bootstrap the front-end of the application
                    </li>
                </ul>
            </>
        ),
    },
    {
        linkHref: "https://docs.google.com/document/d/1GsTD3ENSptN0Tk-Yxqp4zmYyLPYMtS8ZjNwmh-dIeyo/edit?usp=sharing&usp=embed_facebook",
        demoImageURL: "https://imgur.com/nZrLEBJ.png",
        projectName: "Nashtech's Asset Management System",
        projectDescriptionFunction: () => (
            <>
                <span className="text-white">Tech Stack:</span> React.js, Bootstrap, Express.js, PostgreSQL
                <br />
                <span className="block my-2"></span>
                <span className="text-white">Project Details:</span> The final goal of the project is to create a
                web application in which the users will be able to manage
                {`company's`} assets by CRUD operations and also the admins will be
                able to assign certain assets to a multitude of individuals in
                the {`company's`} employees network. Furthermore, this project is a
                team project in which we will work as a team in an Agile Sprint
                methodology, the project was managed and ran like a real-life
                project to train new members about the workflow of the company.
                <span className="block my-2"></span>
                <span className="text-white">My Responsibility: </span>
                <ul>
                    <li>
                        Distribute tasks and manage members like a team leader
                    </li>
                    <li>
                        In charge of various crucial components of the application
                    </li>
                    <li>
                        Work with PO, PM and BA to get a better understanding of the requirements
                    </li>
                    <li>
                        Utilize the mentioned tech stack to work with the team to resolve tasks and issues 
                    </li>
                </ul>
            </>
        ),
    },
]