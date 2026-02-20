import './Skills.css'

const categories = [
  {
    icon: '🤖',
    title: 'Machine Learning & Modeling',
    skills: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'PyCaret', 'R'],
  },
  {
    icon: '🔄',
    title: 'Data Engineering',
    skills: ['Apache Spark', 'Apache Airflow', 'Airbyte', 'dbt', 'Dagster', 'Redpanda', 'Apache Kafka'],
  },
  {
    icon: '📊',
    title: 'Dashboard & Visualization',
    skills: ['Streamlit', 'Apache Superset', 'Metabase', 'Plotly', 'Matplotlib', 'Seaborn'],
  },
  {
    icon: '🚀',
    title: 'MLOps & Deployment',
    skills: ['Docker', 'Kubernetes', 'FastAPI', 'GitHub Actions', 'GitLab CI', 'Linux'],
  },
  {
    icon: '🗄️',
    title: 'Databases & Storage',
    skills: ['PostgreSQL', 'MongoDB', 'Snowflake', 'DuckDB'],
  },
  {
    icon: '⚙️',
    title: 'Dev Tools',
    skills: ['Git', 'GitHub Actions'],
  },
]

const allTech = [
  { name: 'Python', color: '#3776AB' },
  { name: 'R', color: '#276DC3' },
  { name: 'TensorFlow', color: '#FF6F00' },
  { name: 'Keras', color: '#D00000' },
  { name: 'Scikit-learn', color: '#F7931E' },
  { name: 'Streamlit', color: '#FF4B4B' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Apache Spark', color: '#E25A1C' },
  { name: 'Apache Airflow', color: '#017CEE' },
  { name: 'Airbyte', color: '#615EFF' },
  { name: 'dbt', color: '#FF694B' },
  { name: 'Snowflake', color: '#29B5E8' },
  { name: 'Apache Superset', color: '#00A699' },
  { name: 'Metabase', color: '#509EE3' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Dagster', color: '#6750A4' },
  { name: 'Apache Kafka', color: '#231F20' },
  { name: 'GitHub Actions', color: '#2088FF' },
  { name: 'Git', color: '#F05032' },
  { name: 'Linux', color: '#FCC624' },
  { name: 'Plotly', color: '#3F4F75' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Tech <span className="accent">Stack</span></h2>
        <p className="section-subtitle">
          Tools and technologies I use to build data-driven solutions
        </p>

        <div className="skills-categories">
          {categories.map(cat => (
            <div key={cat.title} className="skill-category card">
              <div className="skill-category-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-cloud">
          {allTech.map(t => (
            <span
              key={t.name}
              className="tech-chip"
              style={{ '--chip-color': t.color }}
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
