import React, { useRef, useEffect } from "react";
import AppSection from "@/components/AppSection";
// import { EDUCATION } from "@/constants/menu";
import Image from "next/image";
import AppText from "@/components/AppText";
import CywareImage from "@images/icons/cyware.svg";

// const contactInfoArr = [
//     {
//       id: "github",
//       icon: CywareImage,
//       url: "https://github.com/shivasaicharanruthala",
//     },]

function ExperienceSection() {
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const observerRefs = useRef<{ [key: string]: IntersectionObserver }>({});


  return (
    <AppSection headerTxt={"experience"}>
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
     <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Data Science Intern</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">Jot Arthur Web Services</div>
    <time className="font-caveat font-medium text-amber-500">May 2019 - December 2019</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>Engineered an Image Search Engine with Python & OpenCV.</li>
    <li>Developed a facial expression modifier using StarGAN, improved model accuracy using AutoKeras and Neural Architecture Search </li>
    <li>Designed an object detection system for auto rickshaws on Indian roads, employing single-shot detection techniques.</li>
    <li>Developed real-time algorithm for communication via eyelid movements in a video sequence using eye aspect ratio, OpenCV, and Python.</li>
  </ul>    
  </div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Data Science Intern</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">Accenture</div>
    <time className="font-caveat font-medium text-amber-500">Jan 2020 - June 2020</time>
  </div>
  </div>
      <ul className="list-disc text-slate-500 space-y-1 pl-5">
        <li>	Innovated a real-time cell phone usage detection system using YOLOv4, achieving a 0.77 mAP, demonstrating the ability to apply state-of-the-art object detection methods to solve practical problems with high precision and recall rates (93.8% precision, 92.5% recall). </li>
        <li>	Led the creation of a custom 2,000-image dataset and optimized model performance through rigorous A/B testing, resulting in the integration of a highly efficient detection model into the Flutura AI platform, Cerebra, enhancing real-time surveillance capabilities. </li>
        <li>	Engineered and deployed a high-performance ETL pipeline for seamless data ingestion in live CCTV monitoring systems, achieving low-latency detection (~18 FPS), showcasing expertise in real-time data processing and application in operational settings.  </li>
        <li>Utilized R to enhance bus battery efficiency by 15% and reduce costs by 10%.</li>
        <li>Developed and trained a Super-Resolution Generative Adversarial Network (SRGAN) using PyTorch to enhance low-resolution images to high-resolution quality </li>
      </ul> 
    </div>
    
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Data Scientist</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">ZS Associates Pvt Ltd</div>
    <time className="font-caveat font-medium text-amber-500">July 2020 - July 2022</time>
  </div>
  </div>
  
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>	Led redesign of customer engagement strategy, implementing sophisticated ML models like LSTM and XGBoost which enhanced sales forecasting and drove a $20M revenue increase while improving lead qualification by 15%.</li>
    <li>	Optimized portfolio management algorithms using the PuLP library, tripling efficiency and boosting sales by 20%.</li>
    <li>	Developed a Writer lookalike model with 97% accuracy by combining Positive-Unlabeled learning with XGBoost, packaged in Docker for efficient scaling, and orchestrated using Kubernetes.</li>
    <li>	Collaborated with cross functional teams to merge ETL pipelines with ML solutions, leveraging Excel and Matplotlib for data visualization to communicate complex data and insights to stakeholders.</li>
    <li>	Devised and deployed ML and DL-based triggers, including LSTM and XGBoost algorithms, achieving a significant 1.5-time boost in code efficiency and enhancing sales predictions with SHAP insights.</li>
    <li>	Crafted an ML-based solution for predicting patient therapy changes using a genetic algorithm for feature extraction from patient journeys, boosting prediction accuracy.</li>
  </ul>    
  </div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Freelance Project Engineer</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">Freelance</div>
    <time className="font-caveat font-medium text-amber-500">July 2022 - August 2022</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>  Launched a GAN project to generate photorealistic Indian faces, enhancing AI diversity.</li>
    <li>Compiled a dataset of 20,000 Indian facial images, broadening feature representation.</li>
    <li>Utilized DcGAN and StyleGAN on high-end GPUs for high-fidelity image creation.</li>
  </ul>
      </div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">MS in Artificial Intelligence</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">San Jose State University</div>
    <time className="font-caveat font-medium text-amber-500">August 2022 - May 2024</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
    <li>Specialization : Data Science</li>
    <li>Coursework : Machine Learning, Advanced Data Mining, Big Data, AI & Data Engineering, Masters Project</li>
    <li>Research Interests : Generative AI, Deep Learning and Natural Language Processing</li>
  </ul>
    </div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
        </svg>
    </div>
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
    <div className="mb-4">
    <div className="font-bold text-slate-900">Data Science Intern</div>
  <div className="flex justify-between items-center">
    <div className="font-bold text-slate-900">BobiHealth</div>
    <time className="font-caveat font-medium text-amber-500">August 2023 - December 2023</time>
  </div>
  </div>
  <ul className="list-disc text-slate-500 space-y-1 pl-5">
  <li> Developed a real-time chatbot integrated with advanced NLP models like Hugging Face Transformers, GPT, RAG, LoRA, and Llama2 </li>
    <li>Designed AI model for pregnancy risk analysis (90% accuracy) using XGBoost and collected data for analysis from NCBI, CDC.gov, and various health datasets.</li>
    <li>Utilized R and advanced data analytics methodologies to analyze pregnancy risk datasets, expertly writing large-scale ad-hoc SQL queries and creating interactive KPI metrics in Tableau</li>
  </ul> 
    </div>
</div>

</div>
    </AppSection>
  );
}

export default ExperienceSection;
