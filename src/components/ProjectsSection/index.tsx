"use client";

import React, { useState, useRef, useEffect } from "react";
import AppSection from "../AppSection";
import { PROJECTS } from "@/constants/menu";
import AppButton from "../AppButton";
import AppText from "../AppText";
import GithubLogo from "@images/icons/github-logo.svg";
import GlobeIcon from "@images/icons/globe-icon.svg";
import PlayIcon from '@images/icons/play-icon.svg';
import Image from "next/image";

const TAGS = {
  DATASCIENTIST: "Data Scientist",
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DATAENGINEER: "Data Engineering",
  DATAANALYST: "Data Analyst",
  MLENGINEER: "Machine Learning Engineer",
  RESEARCH: "Research",
};

const PER_PAGE_PROJECTS = 3;

const randomColors = [
  "text-blue-600",
  "text-green-600",
  "text-yellow-600",
  "text-red-600",
  "text-pink-600",
  "text-purple-600",
  "text-indigo-600",
  "text-teal-600",
  "text-orange-600",
  "text-lime-600",
  "text-cyan-600",
  "text-emerald-600",
  "text-amber-600",
  "text-fuchsia-600",
  "text-true-gray-600",
];

const mainProjects = [
  {
    id: "image-search-engine",
    name: "Image Search Engine",
    description: `This Project contains an end-to-end implementation of an image search engine application. It is a rough simulation of a real world implementation and contains various modules, which are Image Produce, Image Consumer, FastAPI server, React Web App.`,
    techStack: [
      "Python", 
      "FastAPI", 
      "Confluent Kafka", 
      "ElasticSearch", 
      "Pyspark Streaming", 
      "Hugging Face Transformers", 
      "ReactJS", 
      "MLflow", 
      "Docker", 
      "Apache Kafka", 
      "Apache Spark", 
      "Kubernetes", 
      "AWS", 
      "GCP", 
      "Azure", 
      "S3", 
      "Cloud Functions", 
      "TensorFlow", 
      "PyTorch", 
      "Node.js", 
      "Webpack", 
      "Babel", 
      "ESLint", 
      "Jest"
    ]
    ,
    imgURL: "/images/image_search_engine.jpg",
    githubLink: `https://github.com/sqiprasanna/Image-Search-Engine`,
    tags: [TAGS.DATAENGINEER, TAGS.MLENGINEER, TAGS.BACKEND, TAGS.FRONTEND],
  },
  {
    id: "pdf-qa-bot",
    name: "PDF Question Answering Bot",
    description: `This repository contains a PDF Question-Answering chat application that extracts information from uploaded PDF files and answers user queries based on the document content. It uses LlamaIndex, ChromaDB, and OpenAI's GPT-4 to provide accurate answers to questions related to the uploaded documents.    `,
    techStack: [ "Python", 
    "Flask", 
    "PyMuPDF", 
    "OpenAI GPT-4", 
    "LlamaIndex", 
    "ChromaDB", 
    "NLTK", 
    "Rouge-score", 
    "OpenAI API", 
    "HTML", 
    "CSS", 
    "JavaScript"],
    imgURL: "/images/pdf-qa-bot.jpeg",
    githubLink: `https://github.com/sqiprasanna/pdf-qa-bot`,
    // webLink: `https://codelabs-preview.appspot.com/?file_id=1tawz6aVeswcHqI2OKAxYyYzYdJ5Nxs-1t2lzuXzI5OU#0`,
    tags: [TAGS.DATASCIENTIST, TAGS.BACKEND],
  },
  {
    id: "biomedical-relation-extraction",
    name: "Biomedical Relation Extraction Using Knowledge Graphs",
    description: "This project enhances biomedical NLP by comparing the performance of established models like BioBERT against newer models such as Gemma-2b, Gemma-7b, and Llama2-7b, on benchmark datasets. It aims to improve binary relation classification and integrates findings into knowledge graphs to map complex relationships.",
    techStack: [
      "Python", 
      "BioBERT", 
      "Gemma-2b", 
      "Gemma-7b", 
      "Llama2-7b", 
      "Neo4j", 
      "Hugging Face Transformers", 
      "spaCy", 
      "PyTorch", 
      "TensorFlow", 
      "GCP", 
      "AWS", 
      "Docker", 
      "Kubernetes"
    ],
    imgURL: "/images/biomedical-relation-extraction.png",
    githubLink: "https://github.com/sqiprasanna/biomedical-relation-extraction",
    tags: [TAGS.RESEARCH, TAGS.DATASCIENTIST, TAGS.DATAANALYST],
},
{
  id: "superstore-data-analysis",
  name: "SuperStore Data Analysis",
  description: "This data analysis project utilizes R programming to perform comprehensive analysis on SuperStore's sales records. It identifies key performance indicators, uncovers trends, and highlights areas for improvement. The project employs advanced data manipulation and visualization techniques to drive strategic business decisions.",
  techStack: [
    "R",
    "RStudio",
    "dplyr",
    "tidyr",
    "ggplot2",
    "forecast",
    "Data Visualization",
    "Predictive Modeling",
    "Statistical Analysis"
  ],
  imgURL: "/images/superstore-data-analysis.png",
  githubLink: "https://github.com/yourusername/superstore-data-analysis",
  tags: [TAGS.DATASCIENTIST, TAGS.DATAANALYST]
},

{
  id: "job-recommendation-bot",
  name: "Recommendation Bot - A RASA-Powered Chatbot",
  description: "The Job Recommendation Bot assists users in navigating the job market with personalized suggestions, career advice, and learning resources. It leverages APIs like Google Jobs and YouTube Search to provide real-time data and integrates with MySQL for storing user preferences.",
  techStack: [
    "RASA",
    "Python",
    "MySQL",
    "Google Jobs API",
    "YouTube Search API",
    "Flask"
  ],
  imgURL: "/images/job-recommendation-bot.png",
  githubLink: "https://github.com/sqiprasanna/CMPE_252_job_recommendation_ai_bot",
  tags: [TAGS.BACKEND, TAGS.DATAENGINEER, TAGS.MLENGINEER]
},

{
  id: "fake-news-detection",
  name: "Fake News Detection with GeFS and XAI",
  description: "This project addresses the spread of fake news using advanced DL algorithms and genetic algorithm-based feature selection to improve detection accuracy. Techniques like SHAP provide explainability, enhancing transparency and user trust in the system.",
  techStack: [
    "TensorFlow",
    "Keras",
    "Pandas",
    "NumPy",
    "Gensim",
    "Scikit-learn",
    "NLTK",
    "Seaborn",
    "XGBoost",
    "CNN-LSTM",
    "BERT"
  ],
  imgURL: "/images/fake-news-detection.png",
  githubLink: "https://github.com/sqiprasanna/fake_news_detection_with_GeFS_and_XAI",
  tags: [TAGS.DATASCIENTIST, TAGS.RESEARCH, TAGS.MLENGINEER]
},
{
  id: "srgan-training-testing",
  name: "Super-Resolution GAN (SRGAN) Training and Testing",
  description: "This project contains the setup for training and evaluating a Super-Resolution Generative Adversarial Network (SRGAN). It focuses on upscaling low-resolution images to higher resolutions using a GAN approach, with detailed instructions on dataset structure, training, testing, and continuing training.",
  techStack: [
    "Python",
    "PyTorch",
    "torchvision",
    "Pillow"
  ],
  imgURL: "/images/srgan-project.png",
  githubLink: "https://github.com/sqiprasanna/SRGAN_code",
  tags: [TAGS.MLENGINEER, TAGS.DATAENGINEER, TAGS.RESEARCH]
},

{
  id: "music-recommendations",
  name: "Music Recommendation System",
  description: "This project develops a music recommendation system using the Million Song Dataset to predict user preferences based on song play counts and metadata. It involves data preprocessing, EDA, feature engineering, and building various recommendation algorithms including Neural Collaborative Filtering, Hybrid Systems using Autoencoders, and SVD with Neural Networks. The system also enhances recommendations by incorporating artist and genre metadata.",
  techStack: [
    "TensorFlow",
    "Keras",
    "Surprise",
    "Gensim",
    "Word2Vec",
    "GloVe",
    "TfIdf",
    "FastText"
  ],
  imgURL: "/images/music-recommendations.png",
  githubLink: "https://github.com/sqiprasanna/music_recommendations",
  tags: [TAGS.DATASCIENTIST, TAGS.MLENGINEER, TAGS.DATAENGINEER]
},
{
  id: "hospital-management-system",
  name: "Hospital Management System using MERN Stack",
  description: "This Hospital Management System is a comprehensive web application developed using the MERN stack (MongoDB, Express.js, React, Node.js) with Redux for state management, TailwindCSS for responsive UI design, and Framer Motion for animations. It aims to streamline hospital operations, enhance patient care, and improve overall efficiency with features like user authentication, patient management, appointment scheduling, inventory management, and billing.",
  techStack: [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "Redux",
    "TailwindCSS",
    "Framer Motion"
  ],
  imgURL: "/images/hospital-management-system.png",
  githubLink: "https://github.com/sqiprasanna/hospital_management",
  tags: [TAGS.FRONTEND, TAGS.BACKEND, TAGS.DATAENGINEER]
},
{
  id: "custom-object-detection",
  name: "Custom Object Detection SSD with Flask API",
  description: "A Flask API that integrates a custom-trained SSD (Single Shot Multibox Detector) model for object detection. The project is focused on developing a lightweight and scalable object detection system that can be easily integrated with web applications for real-time image processing tasks.",
  "techStack": [
    "TensorFlow",
    "Keras",
    "Flask",
    "SSD"
  ],
  imgURL: "/images/custom-object-detection.png",
  githubLink: "https://github.com/sqiprasanna/Custom_Object_Detection_SSD_Flask_API",
  tags: [TAGS.BACKEND, TAGS.MLENGINEER]
},
{
  id: "facial-expression-synthesis",
  name: "Facial Expression Synthesis",
  description: "This project focuses on creating a facial expression modifier using advanced GAN techniques. It involves training on multiple datasets, including a Facial Expression Dataset with 2,100 images of seven different facial expressions and the CelebA Dataset with 202,599 celebrity face images. The project utilizes Image to Image translation with StarGAN and Pix2Pix models to accurately and realistically modify facial expressions from sketches. An extended StarGAN model that preserves input image features in the reconstructed image was developed, along with a Pix2Pix model trained on 328 Sketch-Image pairs for 300 epochs on a Tesla K20 GPU. A ResNet-based facial expression classifier was also used, achieving 87.23% accuracy in classifying expressions, improving the existing methods by 10%.",
  techStack: [
    "GANs",
    "TensorFlow",
    "Keras",
    "StarGAN",
    "Pix2Pix",
    "ResNet"
  ],
  imgURL: "/images/facial-expression-synthesis.png",
  githubLink: "https://github.com/sqiprasanna/Facial_expression_synthesis_modified",
  tags: [TAGS.RESEARCH, TAGS.MLENGINEER]
},

{
  id: "communication-via-eyeblinks",
  name: "Communication with PC via EyeBlinks",
  description: "This project develops a real-time system to detect eye blinks using video input from a standard camera. It utilizes eye aspect ratio to measure eye openings, enabling users to communicate with computers through eye movements. The application has potential in accessibility technology, allowing those with limited mobility to interact with digital devices.",
  techStack: [
    "OpenCV",
    "Python",
    "Machine Learning"
  ],
  imgURL: "/images/communication-via-eyeblinks.png",
  githubLink: "https://github.com/sqiprasanna/Communication-with-PC-via-EyeBlinks",
  tags: [TAGS.DATASCIENTIST, TAGS.MLENGINEER]
}



  // {
  //   id: "",
  //   name: "",
  //   description: ``,
  //   techStack: [],
  //   imgURL: "/images/image.png",
  //   githubLink: ``,
  //   tags: [TAGS.],
  // },
  
];

function ProjectsSection() {
  const [selectedProjects, setSelectedProjects] = useState(mainProjects);
  const [displayedProjects, setDisplayedProjects] = useState(PER_PAGE_PROJECTS);

  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const projectObserverRefs = useRef<{ [key: string]: IntersectionObserver }>(
    {}
  );

  useEffect(() => {
    selectedProjects.forEach((project) => {
      const projectRef = projectRefs.current[project.id];

      if (!projectRef) return;

      const obsCallBack = function (entries: IntersectionObserverEntry[]) {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          projectRef.classList.remove("opacity-100");
          projectRef.classList.remove("translate-y-0");
          projectRef.classList.add("opacity-0");
          projectRef.classList.add("translate-y-[5%]");
        } else {
          projectRef.classList.remove("opacity-0");
          projectRef.classList.remove("translate-y-[5%]");
          projectRef.classList.add("opacity-100");
          projectRef.classList.add("translate-y-0");
        }
      };

      const obsOptions = {
        root: null,
        threshold: 0,
      };

      const projectObserver = new IntersectionObserver(obsCallBack, obsOptions);
      projectObserver.observe(projectRef);
      projectObserverRefs.current[project.id] = projectObserver;
    });

    return () => {
      selectedProjects.forEach((project) => {
        projectObserverRefs.current[project.id]?.disconnect();
      });
    };
  }, [selectedProjects, displayedProjects]);

  const onSelectTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "all") {
      setSelectedProjects(mainProjects);
      setDisplayedProjects(displayedProjects);
    } else {
      const filteredProjects = mainProjects.filter((project) =>
        project.tags.includes(value)
      );
      setSelectedProjects(filteredProjects);
      setDisplayedProjects(displayedProjects);
    }
  };

  const handleOnClickBtn = () => {
    if (displayedProjects < selectedProjects.length) {
      setDisplayedProjects((prevState) => prevState + PER_PAGE_PROJECTS);
    } else {
      setDisplayedProjects((prevState) => prevState - PER_PAGE_PROJECTS);
    }
  };

  return (
    <AppSection headerTxt={PROJECTS}>
      <div className="section-content-padding w-full relative flex flex-col items-center justify-start md:gap-8 gap-6">
        <select
          onChange={onSelectTag}
          className="self-end bg-transparent border-2 rounded-md border-borderColor p-2 cursor-pointer text-textColor-primary-day dark:text-textColor-primary-night"
        >
          {["all", ...Object.values(TAGS)].map((tag) => {
            return (
              <option
                className="bg-backgroundColor-day dark:bg-backgroundColor-night"
                key={tag}
                value={tag}
              >
                {tag}
              </option>
            );
          })}
        </select>
        <div className="sm:project-section-grid-layout flex flex-col gap-4">
          {selectedProjects.slice(0, displayedProjects).map((project) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className="md:p-6 p-4 bg-backgroundColor-card-day dark:bg-backgroundColor-card-night w-full rounded-md opacity-0 translate-y-[5%] transition-all duration-500 ease-linear"
            >
              <div className="w-full h-[200px] sm:h-[240px] rounded-md relative mb-4 overflow-hidden">
                <Image alt={project.name} src={project.imgURL} fill />
              </div>
              <div className="flex flex-col gap-3 justify-start">
                <div className="flex gap-2 justify-between align-center">
                <AppText textTag="h3" extraMedium bold defaultColor>
                  {project.name}
                </AppText>
                  <div className="flex gap-2 align-center justify-end">
                  <a href={project.githubLink} target="_blank">
                    <GithubLogo className="h-9 w-9" />
                  </a>
                  {/* {project.webLink && <a href={project.webLink} target="_blank">
                    <GlobeIcon className="h-9 w-9" />
                  </a>}
                  {project.demoLink && <a href={project.demoLink} target="_blank"><PlayIcon className="h-9 w-9"/></a>} */}
                </div>
                  </div>
                <AppText textTag="p" default secondary>
                  {project.description}
                </AppText>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((stack, index) => {
                    return (
                      <p
                        key={stack}
                        className={`text-sm ${index < randomColors.length ? randomColors[index] : randomColors[Math.floor(Math.random() * (13))]}`}
                      >{`#${stack}`}</p>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProjects.length > PER_PAGE_PROJECTS && (
          <AppButton
            buttonType="secondary"
            buttonText={`${
              displayedProjects < selectedProjects.length
                ? "Show More"
                : "Show Less"
            } `}
            ariaLabel={`click to ${
              displayedProjects < selectedProjects.length
                ? "Show More"
                : "Show Less"
            } projects`}
            onClick={handleOnClickBtn}
          />
        )}
      </div>
    </AppSection>
  );
}

export default ProjectsSection;
