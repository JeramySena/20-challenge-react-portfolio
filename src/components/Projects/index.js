import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Projects() {
    
    const [projects] = useState([
        {
            title: "Welcome to Mars",
            url: 'https://kngurley25.github.io/astronomy-project/',
            github: 'https://github.com/kngurley25/astronomy-project'
        },
        {
            title: "Pizza Hunt",
            url: 'https://afternoon-mountain-11110.herokuapp.com/',
            github: 'https://github.com/JeramySena/pizza-hunt'
        },
        {
            title: "Note Taker",
            url: 'https://jeramy-sena-note-taker.herokuapp.com/',
            github: 'https://github.com/JeramySena/11-challenge-note-taker'
        },
        {
            title: "Budget Tracker",
            url: 'https://secret-gorge-91967.herokuapp.com/',
            github: 'https://github.com/JeramySena/19-challenge-pwa-budget-tracker'
        },
        {
            title: "Zookeepr",
            url: 'https://zookeepr-jeramy-sena.herokuapp.com/',
            github: 'https://github.com/JeramySena/zookeepr'
        },
        {
            title: "Run Buddy",
            url: 'https://jeramysena.github.io/run-buddy/',
            github: 'https://github.com/JeramySena/run-buddy'
        },

    ]);

    return (
        <section>
            <div className="portfolio-section">
                {projects.map((project, i) => (
                    <Card style={{ width: '25rem' }} key={i}>
                        <Card.Img src={require(`../../assets/projects/${i}.jpg`)} alt={project.title}></Card.Img>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Link href={project.url} target="_blank">Deployed</Card.Link>
                            <Card.Link href={project.github} target="_blank">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
           </div>
        </section>
    );
}

export default Projects;