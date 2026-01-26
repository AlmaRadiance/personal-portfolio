import React from "react";
import "./Portfolio.css";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calendar,
  Users,
  Star,
  Target,
  TrendingUp,
  MessageSquare,
  Eye,
  BarChart,
  Search,
  UserCheck,
  CheckCircle,
  Grid,
  PenTool,
  Palette,
  Sparkles,
  Zap,
  Repeat,
  Code,
  Workflow,
  FileText,
  Lightbulb,
  ArrowRight as ArrowRightIcon,
  BookOpen,
} from "lucide-react";

export default function CaseStudy({
  project,
  allFeaturedProjects,
  onClose,
  scrollProgress,
}) {
  const currentIndex = allFeaturedProjects.findIndex(
    (p) => p.id === project.id
  );

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allFeaturedProjects.length;
  };

  const handlePrev = () => {
    const prevIndex =
      currentIndex === 0 ? allFeaturedProjects.length - 1 : currentIndex - 1;
  };

  return (
    <div
      className={`case-study case-study--${project.company
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
    >
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="case-study-header">
        <button className="back-btn" onClick={onClose}>
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <div className="case-category">{project.category}</div>
      </div>

      <div className="case-hero-modern">
        <div className="hero-gradient"></div>

        <h1 className="case-title">
          <span
            className={`company-name company-name--${project.company
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            {project.company}
          </span>{" "}
          {project.title}
        </h1>
      </div>

      <div className="case-content">
        <div className="case-meta-grid">
          <div className="meta-card">
            <Briefcase size={28} />
            <div>
              <h4>Role</h4>
              <p>{project.role}</p>
            </div>
          </div>

          <div className="meta-card">
            <Calendar size={28} />
            <div>
              <h4>Duration</h4>
              <p>{project.duration}</p>
            </div>
          </div>

          <div className="meta-card">
            <Users size={28} />
            <div>
              <h4>Team</h4>
              <p>{project.team}</p>
            </div>
          </div>

          <div className="meta-card">
            <Star size={28} />
            <div>
              <h4>Company</h4>
              <p>{project.company}</p>
            </div>
          </div>
        </div>

        <section className="problem-section">
          <div className="section-header">
            <Target size={36} />
            <div>
              <h2>Problem Statement</h2>
              <p className="section-subtitle">
                Understanding the core challenge
              </p>
            </div>
          </div>
          <div className="problem-box">
            <p className="large-text">{project.problemStatement}</p>
          </div>
        </section>

        <section>
          <div className="section-header">
            <TrendingUp size={36} />
            <div>
              <h2>Project Goals</h2>
              <p className="section-subtitle">What we aimed to achieve</p>
            </div>
          </div>
          <div className="goals-grid">
            {project.goals.map((goal, idx) => (
              <div key={idx} className="goal-card">
                <goal.icon size={28} />
                <h4>{goal.title}</h4>
                <p>{goal.metric}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="subsection-title">Constraints & Considerations</h3>
          <div className="constraints-list">
            {project.constraints.map((constraint, idx) => (
              <div key={idx} className="constraint-item">
                <CheckCircle size={20} />
                <p>{constraint}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="research-section">
          <div className="section-header">
            <Search size={36} />
            <div>
              <h2>Research & Discovery</h2>
              <p className="section-subtitle">
                Understanding users and their needs
              </p>
            </div>
          </div>

          <div className="research-methods-grid">
            {project.researchMethods.map((method, idx) => (
              <div key={idx} className="research-method-card">
                <div className="research-icon">
                  <method.icon size={24} />
                </div>
                <h4>{method.title}</h4>
                <p className="method-desc">{method.desc}</p>
                <div className="findings-box">
                  <strong>Key Finding:</strong> {method.findings}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-header">
            <Users size={36} />
            <div>
              <h2>User Personas</h2>
              <p className="section-subtitle">Who we're designing for</p>
            </div>
          </div>

          <div className="personas-grid">
            {project.personas.map((persona, idx) => (
              <div key={idx} className="persona-card">
                <div className="persona-header">
                  <div className="persona-avatar">
                    <Users size={32} />
                  </div>
                  <div>
                    <h3>{persona.name}</h3>
                    <p className="persona-title">{persona.title}</p>
                  </div>
                </div>
                <div className="persona-quote">"{persona.quote}"</div>

                <div className="persona-section">
                  <h5>Needs</h5>
                  <ul>
                    {persona.needs.map((need, i) => (
                      <li key={i}>{need}</li>
                    ))}
                  </ul>
                </div>

                <div className="persona-section">
                  <h5>Pain Points</h5>
                  <ul>
                    {persona.painPoints.map((pain, i) => (
                      <li key={i}>{pain}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="case-navigation">
          <button className="nav-btn prev-btn" onClick={handlePrev}>
            <ArrowLeft size={20} />
            <span>Previous Case Study</span>
          </button>

          <button className="nav-btn next-btn" onClick={handleNext}>
            <span>Next Case Study</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
