// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/Project1_1.jpg';
import PROJECT1_2 from '../styles/projects/Project1_2.jpg';
import PROJECT1_3 from '../styles/projects/Project1_3.jpg';
import PROJECT2_1 from '../styles/projects/Project2_1.jpg';
import PROJECT2_2 from '../styles/projects/Project2_2.jpg';
import PROJECT2_3 from '../styles/projects/Project2_3.jpg';
import PROJECT3_1 from '../styles/projects/Project3_1.jpg';
import PROJECT3_2 from '../styles/projects/Project3_2.jpg';
import PROJECT3_3 from '../styles/projects/Project3_3.jpg';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Web Scraping Covid-19 data and ingesting into ELK stack for visualization', //project name
        description: 'Scraping realtime covid-19 data and ingesting into ELK for further processing and visualization', //project description
        githubLink: 'https://github.com/parthjpatel99/Visualizing-ANY-scraped_csv_data-in-dockerized-ELKStack', //github repo link
        projectLink: 'https://github.com/parthjpatel99/Visualizing-ANY-scraped_csv_data-in-dockerized-ELKStack', //deployed project link
        tech: ['Python', 'ELK stack', 'Shell'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
    },
    {
        name: 'Customer Support Ticketing System',
        description: 'A standalone web application using MERN (MongoDB, Express, React, Node.js - A combination oftechnologies based on JavaScript used to build advanced web applications) stack including CRUD operations. Built a secure and compartmentalized role-based authentication and state management system using Redux.',
        githubLink: 'https://github.com/parthjpatel99/customer-support-ticketing-system',
        projectLink: 'https://github.com/parthjpatel99/customer-support-ticketing-system',
        tech: ['React', 'Node.js', 'Redux'],
        photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
    },
    {
        name: 'Simple To Do App',
        description: 'My first android application using Kotlin',
        githubLink: 'https://github.com/parthjpatel99/SimpleToDo',
        projectLink: 'https://github.com/parthjpatel99/SimpleToDo',
        tech: ['Kotlin', 'Android Studio'],
        photo: [PROJECT3_1],
    },
]
