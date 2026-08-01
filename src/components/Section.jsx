import { ArrowRight } from 'lucide-react'

function Section({ eyebrow, title, description, children, reverse = false }) {
  return (
    <section className={`content-section ${reverse ? 'reverse' : ''}`}>
      <div className="section-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
      <div className="section-card">
        <div className="section-pill">
          <span>Immersive</span>
          <ArrowRight size={16} />
        </div>
        {children}
      </div>
    </section>
  )
}

export default Section
