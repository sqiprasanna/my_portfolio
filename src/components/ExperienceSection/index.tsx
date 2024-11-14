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
              <div className="font-bold text-slate-900">Data Scientist II </div>
              <div className="flex justify-between items-center">
                <div className="font-bold text-slate-900">Republic Services Inc.</div>
                <time className="font-caveat font-medium text-amber-500">Sept 2024 – Present</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Developed customer service chatbots using Retrieval-Augmented Generation (RAG) architecture with AWS infrastructure, integrating models like Claude, Mistral, and LLaMA via AWS Bedrock, and utilizing GraphRAG.</li>
              <li>Deployed and monitored an end-to-end pipeline using AWS services like Knowledge bases, Lambda, Step Functions, DynamoDB, OpenSearch, Grafana, CloudWatch, and ECR, optimizing document management and data retrieval.</li>
              <li>Built an AI-driven 'Next Best Actions' solution, boosting customer engagement by 30% and reducing response time by 25%, enhancing satisfaction and retention.</li>
              <li>Cut latency in retrieving customer service answers by 50%, reducing call representative workload by 20% monthly.</li>
              <li>Evaluated pipeline performance with RAGAS, enhancing model efficiency by 10%.</li>
              <li>Scaled chatbot applications across various operational areas at Republic Services, influencing a $20M budget.</li>
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
              <div className="font-bold text-slate-900">Senior Data Scientist</div>
              <div className="flex justify-between items-center">
                <div className="font-bold text-slate-900">BobiHealth</div>
                <time className="font-caveat font-medium text-amber-500">Aug 2023 – May 2024</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Developed an end-to-end NLP-driven chatbot leveraging Hugging Face Transformers, Langchain, GPT-4, RAG, RLHF, ChromaDB, and FastAPI, boosting user engagement with 90% retrieval accuracy.</li>
              <li>Designed an AI model for pregnancy risk analysis (90% accuracy) using Random Forest, and collected data for analysis from public health datasets. Engineered data pipelines and provided predictive analytics with Azure Databricks.</li>
              <li>Orchestrated Airflow workflows for model training and deployment; optimized CI/CD pipelines and Python data modeling to AWS S3, increasing agility by 15%. Incorporated GDPR principles through FMEA ensuring compliance and data protection.</li>
              <li>Utilized R and dplyr for advanced data analytics, analyzed pregnancy risk datasets, performed large-scale ad-hoc SQL queries, and created interactive visualizations using PowerBI, Tableau to extract KPI metrics.</li>
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
              <div className="font-bold text-slate-900">Teaching Assistant</div>
              <div className="flex justify-between items-center">
                <div className="font-bold text-slate-900">San Jose State Univeristy</div>
                <time className="font-caveat font-medium text-amber-500">Aug 2020 – Nov 2020</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Assisted in teaching a Machine Learning course to 40 undergraduate students, delivering hands-on coding labs and practical assignments to solidify core ML concepts.</li>
              <li>Provided one-on-one support and clarified doubts, fostering a strong learning environment that contributed to a pass rate of over 95%.</li>
              <li>Guided students in exploring ML and Data Science careers, nurturing their skills and interest in the field through real-world projects and problem-solving sessions.</li>
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
              <div className="font-bold text-slate-900">Data Scientist</div>
              <div className="flex justify-between items-center">
                <div className="font-bold text-slate-900">ZS Associates</div>
                <time className="font-caveat font-medium text-amber-500">Jul 2020 – Jul 2022</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Led redesign of customer engagement strategy, implementing sophisticated Machine Learning models like LSTM and XGBoost, increasing sales forecasting and driving a $20M revenue increase while improving lead qualification by 15%.</li>
              <li>Developed a Writer lookalike model with 97% accuracy by combining Positive-Unlabeled learning, containerized in Docker for efficient scaling, and orchestrated using Kubernetes; extracted key insights using Shapley values (SHAP) for explainable AI.</li>
              <li>Re-engineered Resource Optimization algorithm for call allocation, resulting in increased operational efficiency by 3x.</li>
              <li>Conducted A/B testing to optimize marketing strategies, increasing conversion rates by 20%.</li>
              <li>Utilized Hadoop, PySpark, and MapReduce for processing large datasets, significantly reducing data processing time by 30%.</li>
              <li>Collaborated with cross-functional teams to merge ETL pipelines with Machine Learning solutions, leveraging Excel and Matplotlib for data visualization to communicate complex data, insights, and adherence to SLA with key stakeholders.</li>
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
                <div className="font-bold text-slate-900">Flutura Decision Sciences and Analytics</div>
                <time className="font-caveat font-medium text-amber-500">Jan 2020 – Jun 2020</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Developed a recommendation system employing Neural Collaborative Filtering, Autoencoders, and SVD + Neural Network, achieving optimal performance with an 18% drop in RMSE and MAE. Elevated cloud operations using AWS S3 and EC2.</li>
              <li>Developed a scalable Big Data image search engine, leveraging Java, PySpark, and Kafka for data processing, integrated Elasticsearch with OpenAI&apos;s CLIP model via MLflow for efficient image retrieval, product analytics.</li>
              <li>Deployed YOLOv4 on AWS with Redis, achieving 95% accuracy for real-time mobile usage detection and a 25% efficiency boost; utilized R to enhance bus battery efficiency by 15% and reduce costs by 10%.</li>
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
                <div className="font-bold text-slate-900">Freelancing</div>
                <time className="font-caveat font-medium text-amber-500">Aug 2019 – Dec 2019</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>	Led photorealistic face generation project using GANs (DcGAN, StyleGAN), enhancing diversity in synthetic image datasets.</li>
              <li>Curated a dataset of 20,000 Indian facial images via web scraping, ensuring diverse feature representation.</li>
              <li>Trained GAN models on high-end GPUs NVIDIA A100s on AWS EC2, achieving high-fidelity image generation.</li>
            </ul>
          </div>
        </div>



        {/* <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
              <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="mb-4">
              <div className="font-bold text-slate-900">Data Science Intern</div>
              <div className="flex justify-between items-center">
                <div className="font-bold text-slate-900">JotArthur Web Services</div>
                <time className="font-caveat font-medium text-amber-500">Jun 2019 – Jul 2019</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Engineered a sophisticated Image Search Engine leveraging Python and OpenCV, refined with advanced clustering techniques, achieving a high precision rate of 95% and a recall rate of 92%.</li>
              <li>Implemented transfer learning methodologies within the TensorFlow framework to train on custom datasets, attaining remarkable model accuracy of 98% and an F1 score of 0.95.</li>
              <li>Optimized neural network architectures using Effective Neural Architecture Search and AutoKeras, enhancing model performance to a notable accuracy of 96%.</li>
              <li>Developed a Hospital Management System using MERN stack, integrating Redux and TailwindCSS for seamless UI/UX. Integrated AWS Elastic Load Balancing to efficiently handle over 5,000 daily active users, ensuring robust scalability and uninterrupted access to critical patient management features.</li>
            </ul>
          </div>
        </div> */}

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
                <div className="font-bold text-slate-900">JotArthur Web Services </div>
                <time className="font-caveat font-medium text-amber-500">May 2019 – July 2019</time>
              </div>
            </div>
            <ul className="list-disc text-slate-500 space-y-1 pl-5">
              <li>Developed a predictive model for financial risk analysis using Random Forest and Logistic Regression, improving risk prediction accuracy by 15%.</li>
              <li>Conducted data cleaning and preprocessing on large financial datasets, enhancing data quality for more accurate analysis.</li>
              <li>Implemented a customer segmentation model using K-means clustering, enabling targeted marketing strategies and increasing customer engagement by 20%.</li>
            </ul>
          </div>
        </div>

      </div>
</AppSection>

  );
}

export default ExperienceSection;
