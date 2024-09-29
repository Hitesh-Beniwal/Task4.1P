import React from 'react';
import { Article } from './Article';  


const tutorials = [
  {
    src: "./images/ml.jpg",
    alt: "Tutorial 1",
    title: "Machine Learning",
    description: "Emerging technologies in software development are revolutionizing how applications are built and utilized. Artificial Intelligence (AI) and Machine Learning (ML) are enhancing software with capabilities for data-driven insights, automation, and personalization.",
    rating: 4.7,
    author_name: "Max"
  },
  {
    src: "./images/kub2.jpeg",
    alt: "Tutorial 2",
    title: "Kubernetes",
    description: "Emerging technologies in software development are revolutionizing how applications are built and utilized. Artificial Intelligence (AI) and Machine Learning (ML) are enhancing software with capabilities for data-driven insights, automation, and personalization.",
    rating: 4.9,
    author_name: "Yuan"
  },
  {
    src: "./images/type.png",
    alt: "Tutorial 3",
    title: "Typescript",
    description: "Emerging technologies in software development are revolutionizing how applications are built and utilized. Artificial Intelligence (AI) and Machine Learning (ML) are enhancing software with capabilities for data-driven insights, automation, and personalization.",
    rating: 3.2,
    author_name: "Kevin"
  }
];


function Tutorials() {
  return (
    <div className="all">
      {tutorials.map((tutorial, index) => (
        <Article key={index} article={tutorial} />
      ))}
    </div>
  );
}

export default Tutorials;
