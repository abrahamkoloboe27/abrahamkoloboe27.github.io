import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    category: 'ml',
    categoryLabel: '🤖 ML & Modeling',
    title: 'Fruits Recognition Training',
    description:
      'Development and evaluation of AI models for fruit image classification, including custom CNN, EfficientNet, ResNet, and VGG16.',
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    href: 'https://github.com/abrahamkoloboe27/Fruits-Recognition-Training',
  },
  {
    category: 'ml',
    categoryLabel: '🤖 ML & Modeling',
    title: 'Churn Prediction & Analysis',
    description:
      'Customer data analysis and churn risk prediction using machine learning techniques.',
    tags: ['Python', 'Scikit-learn', 'Pandas'],
    href: 'https://github.com/abrahamkoloboe27/Churn-Prediction-and-Analysis-Project',
  },
  {
    category: 'de',
    categoryLabel: '🔄 Data Engineering',
    title: 'E-Commerce Data Pipeline',
    description:
      'Comprehensive data engineering platform with synthetic data generation, ETL orchestration (Airflow), structured data lake (Bronze/Silver/Gold), analytics dashboards (Superset), and real-time monitoring (Grafana).',
    tags: ['Apache Airflow', 'Apache Superset', 'PostgreSQL', 'Grafana', 'Docker'],
    href: 'https://github.com/abrahamkoloboe27/E-Commerce-Data-Pipeline-And-Dashboard-With-Apache-Superset',
  },
  {
    category: 'de',
    categoryLabel: '🔄 Data Engineering',
    title: 'RentCar Analytics Pipeline',
    description:
      'End-to-end data pipeline using MongoDB Atlas, Airbyte Cloud, dbt, Airflow (Astronomer), Snowflake, and Metabase.',
    tags: ['MongoDB', 'Airbyte', 'dbt', 'Snowflake', 'Metabase'],
    href: 'https://github.com/abrahamkoloboe27/rentcar-pipeline-airbyte-snowflake-dbt-airflow-astro',
  },
  {
    category: 'de',
    categoryLabel: '🔄 Data Engineering',
    title: 'Airline Analytics Pipeline',
    description:
      'End-to-end pipeline using Apache Airflow to extract airline data from PostgreSQL, transform with DuckDB, store in MongoDB Atlas, and visualize through Streamlit.',
    tags: ['Apache Airflow', 'DuckDB', 'MongoDB', 'Streamlit'],
    href: 'https://github.com/abrahamkoloboe27/Airflow-Pipeline-Dashboard-Compagnie-Aerienne',
  },
  {
    category: 'dash',
    categoryLabel: '📊 Dashboard',
    title: 'Dashboard Streamlit ATUT',
    description:
      'Interactive dashboard built with Streamlit for data visualization and analysis.',
    tags: ['Streamlit', 'Python', 'Plotly'],
    href: 'https://github.com/abrahamkoloboe27/Dashboard-Streamlit-ATUT',
  },
  {
    category: 'dash',
    categoryLabel: '📊 Dashboard',
    title: 'Retail Analysis & Prediction',
    description:
      'Dashboard for retail data analysis and sales prediction combining analytics and ML.',
    tags: ['Streamlit', 'Scikit-learn', 'Pandas'],
    href: 'https://github.com/abrahamkoloboe27/Retail-Analysis-and-Prediction',
  },
  {
    category: 'mlops',
    categoryLabel: '🚀 MLOps',
    title: 'Fruits Recognition API',
    description:
      'REST API developed with FastAPI to serve fruit image classification models in production.',
    tags: ['FastAPI', 'Docker', 'TensorFlow'],
    href: 'https://github.com/abrahamkoloboe27/Fruits-Recognition-API',
  },
  {
    category: 'mlops',
    categoryLabel: '🚀 MLOps',
    title: 'MLOps CI/CD Demo',
    description:
      'Demonstration of CI/CD pipeline implementation for machine learning projects using GitHub Actions.',
    tags: ['GitHub Actions', 'Docker', 'Python'],
    href: 'https://github.com/abrahamkoloboe27/Demo-CICD-With-Github-Actions-ATUT-SN',
  },
]

const filters = [
  { key: 'all', label: 'All' },
  { key: 'ml', label: '🤖 ML & Modeling' },
  { key: 'de', label: '🔄 Data Engineering' },
  { key: 'dash', label: '📊 Dashboard' },
  { key: 'mlops', label: '🚀 MLOps' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const visible = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Notable <span className="accent">Projects</span></h2>
        <p className="section-subtitle">
          A selection of data engineering, ML, and MLOps projects
        </p>

        <div className="project-filters">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn${active === f.key ? ' active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map(p => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card card"
            >
              <div className="project-card-top">
                <span className="project-category-label">{p.categoryLabel}</span>
                <svg className="project-ext-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-label="Opens in new tab" role="img">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
