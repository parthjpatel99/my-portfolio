//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Parth Janakbhai Patel", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'parth8199@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        eduemail: 'parthjanakbhai.patel@stonybrook.edu',
        phone: '', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+1' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/parthjpatel99', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/parthjpatel99/', icon: faLinkedinIn },
        
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hi, I am Parth.",
        subtitle: "I am graduate student at Stony Brook University pursuing masters in science in Computer Engineering. I am interested in Computer Vision, Android and Full-stack development among other things."
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Languages", // eg.frontend, backend, devops etc
            skills: ["Python", "Kotlin", "JavaScript"] //eg. react, html, python etc.
        },
        {
            category: "Full Stack",
            skills: ["React", "Node.js", "MongoDb"]
        },
        {
            category: "Tools",
            skills: ["Git", "ELK stack", "Docker"]
        },
       
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "'I am an aspiring software development engineer who is currently exploring with different technologies to see what fits my interests. I like to code and solve critical software engineering problems. I also like to build beautiful things. My short term goal is to be able to build beautiful android applications.'",
        resume: "https://www.dropbox.com/s/pmk58ugobvqeq2k/Resume.pdf?dl=0" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'Aug 2021 - Present', //timespan
                title: 'MS in Computer Engineering', //eg. BTech in Compuster Engineering
                organization: 'Stony Brook University', //eg. VJTI, Mumbai
                description: 'Expected Graduation: December 2022' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: 'July 2017 - May 2021',
                title: 'BTech in Information Technology',
                organization: 'Dharmsinh Desai University',
                description: 'GPA: 8.19/10.0'
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'SAC, Indian Space Research Organisation', //company name eg.Microsoft
                companylogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/300px-Indian_Space_Research_Organisation_Logo..png?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Research Intern', //post you held eg.Senior SDE
                time: 'Dec 2020 - April 2021', //timespan
                description: "Researched applications of deep learning and computer vision on archived satellite data captured by Indian weather satellites. Proposed the project definition 'Detection of Oceanic Eddies using Sea Level Anomaly Data' to utilize the potential of modern deep learning techniques on scientific data. Built image datasets and trained image segmentation model (Mask R-CNN) to detect oceanic eddies from sea level anomaly image dataset with an accuracy of 92%. Localized and classified types of oceanic eddies from detected eddy dataset by training object detection model (YOLO) with a classification accuracy of 98%." 
            },
            {
                company: 'Stony Brook University', //company name eg.Microsoft
                companylogo: 'https://it.stonybrook.edu/sites/default/files/styles/medium/public/articles/7632/images/sb_shield.jpg?itok=J81aOmpx?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Teaching Assistant in Software Techniques', //post you held eg.Senior SDE
                time: 'Jan 2022 - Present', //timespan
                description: "Assisted students in understanding class concepts through tutoring and mentorship. Reviewed and graded course assignments and projects."
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Projects',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My projects',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}