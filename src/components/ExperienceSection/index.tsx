import React, { useRef } from "react";
import AppSection from "@/components/AppSection";

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
              <div className="font-bold text-slate-900">Data Scientist</div>
              <div className="flex justify-between items-center">
                <div className="font-bold text-slate-900">BobiHealth</div>
                <time className="font-caveat font-medium text-amber-500">Aug 2023 – May 2024</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Developed an NLP-driven chatbot leveraging Hugging Face Transformers, GPT, RAG, RLHF, ChromaDB, and FastAPI, boosting user engagement and efficiency by 25% with 90% retrieval accuracy.</li>
              <li>Designed AI model for pregnancy risk analysis (90% accuracy) using Random Forest and collected data for analysis from public health datasets. Engineered data pipelines and provided predictive analytics with Azure Databricks.</li>
              <li>Orchestrated Airflow workflows for model training and deployment; optimized CI/CD pipelines and Python data modeling to AWS S3, increasing agility by 15%. Incorporated GDPR principles through FMEA ensuring compliance and data protection.</li>
              <li>Utilized R and dplyr for advanced data analytics methodologies to analyze pregnancy risk datasets, expertly writing large-scale ad-hoc SQL queries and creating interactive visualizations and KPI metrics.</li>
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
                <time className="font-caveat font-medium text-amber-500">Aug 2022 - May 2024</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Specialization: Data Science</li>
              <li>Coursework: Machine Learning, Advanced Data Mining, Big Data, AI & Data Engineering, Masters Project</li>
              <li>Research Interests: Generative AI, Deep Learning, and Natural Language Processing</li>
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
                <time className="font-caveat font-medium text-amber-500">Jul 2022 - Aug 2022</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Launched a GAN project to generate photorealistic Indian faces, enhancing AI diversity.</li>
              <li>Compiled a dataset of 20,000 Indian facial images, broadening feature representation.</li>
              <li>Utilized DcGAN and StyleGAN on high-end GPUs for high-fidelity image creation.</li>
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
                <div className="font-bold text-slate-900">ZS Associates India Pvt Ltd</div>
                <time className="font-caveat font-medium text-amber-500">Jul 2020 - Jul 2022</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Led redesign of customer engagement strategy, implementing sophisticated ML models like LSTM and XGBoost which enhanced sales forecasting and drove a $20M revenue increase while improving lead qualification by 15%.</li>
              <li>Optimized portfolio management algorithms using the PuLP library, tripling efficiency and boosting sales by 20%.</li>
              <li>Developed a Writer lookalike model with 97% accuracy by combining Positive-Unlabeled learning with XGBoost, packaged in Docker for efficient scaling, and orchestrated using Kubernetes.</li>
              <li>Collaborated with cross functional teams to merge ETL pipelines with ML solutions, leveraging Excel and Matplotlib for data visualization to communicate complex data and insights to stakeholders.</li>
              <li>Devised and deployed ML and DL-based triggers, including LSTM and XGBoost algorithms, achieving a significant 1.5-time boost in code efficiency and enhancing sales predictions with SHAP insights.</li>
              <li>Crafted an ML-based solution for predicting patient therapy changes using a genetic algorithm for feature extraction from patient journeys, boosting prediction accuracy.</li>
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
                <div className="font-bold text-slate-900">Accenture</div>
                <time className="font-caveat font-medium text-amber-500">Jan 2020 - Jun 2020</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Developed a recommendation system employing Neural Collaborative Filtering, Autoencoders, and SVD + Neural Network, achieving optimal performance with an 18% drop in RMSE and MAE. Elevated cloud operations using AWS S3 and EC2.</li>
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
                <div className="font-bold text-slate-900">Ericsson</div>
                <time className="font-caveat font-medium text-amber-500">Jul 2019 – Dec 2019</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Developed a scalable Big Data image search engine, leveraging Java, PySpark, and Kafka for data processing, integrated Elasticsearch with OpenAI's CLIP model via MLflow for efficient image retrieval, product analytics.</li>
            </ul>
          </div>
        </div>

      </div>
    </AppSection>
  );
}

export default ExperienceSection;
