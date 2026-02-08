'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Principal / Lead Software Engineer',
    company: 'Delta Dental of Michigan',
    via: 'via GS Global Services / Trintel Technologies',
    location: 'Okemos, MI',
    period: 'July 2018 – Present',
    highlights: [
      'Act as principal technical authority across multiple enterprise healthcare platforms, guiding architecture decisions and modernization strategy',
      'Architect scalable, secure microservices using Java 21, Spring Boot, and RESTful APIs for provider administration and credentialing systems',
      'Deploy applications on private cloud using Docker and Kubernetes, enabling containerized microservices and rolling deployments',
      'Leverage GitHub Copilot to accelerate development and improve code consistency',
      'Establish engineering best practices reducing production defects by ~30%',
      'Lead design reviews and mentor senior engineers across multiple teams',
    ],
    technologies: ['Java 21', 'Spring Boot', 'Spring AOP', 'REST', 'Angular', 'Docker', 'Kubernetes', 'PostgreSQL', 'GitHub Copilot'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Ericsson',
    via: 'via GS Global Services',
    location: 'Piscataway, NJ',
    period: 'Oct 2016 – July 2018',
    highlights: [
      'Designed and developed enhancements for high-volume messaging and notification systems',
      'Led end-to-end development using Java, Spring Boot, JMS, and ActiveMQ',
      'Refactored legacy components to improve performance and scalability',
      'Performed root cause analysis and resolved critical production issues',
    ],
    technologies: ['Java 8', 'Spring Boot', 'JMS', 'ActiveMQ', 'Cassandra', 'Jenkins', 'Angular'],
  },
  {
    role: 'Software Engineer',
    company: 'Wolters Kluwer Financial Services',
    via: 'via Ness USA',
    location: 'Waltham, MA',
    period: 'July 2015 – June 2016',
    highlights: [
      'Enhanced regulatory compliance applications for financial institutions',
      'Designed and implemented stateless session beans and backend services',
      'Optimized system performance for client-specific deployments',
    ],
    technologies: ['Java 7', 'Spring MVC', 'Hibernate', 'EJB', 'Oracle', 'WebSphere'],
  },
  {
    role: 'Technical Lead / Senior Developer',
    company: 'Deloitte, Wipro, Infosys',
    location: 'Multiple Locations',
    period: '2005 – 2013',
    highlights: [
      'Led end-to-end design of large-scale enterprise applications across healthcare, finance, and telecom',
      'Key roles in multiple COBOL-to-Java modernization initiatives',
      'Designed multi-tier, multi-threaded backend systems for high-volume transaction processing',
      'Served as Technical Lead for distributed onshore/offshore teams',
      'Established coding standards and design patterns to improve code quality',
    ],
    technologies: ['Java', 'J2EE', 'EJB', 'JMS', 'Spring', 'Web Services', 'WebSphere', 'Oracle'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Two decades of architecting enterprise solutions across healthcare, finance, and telecom
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-600 via-primary-500 to-accent-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-[var(--bg-secondary)] z-10 shadow-lg shadow-primary-500/50"></div>

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}>
                  <div className="glass rounded-2xl p-8 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300">
                    <div className="mb-4">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-300 mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-xl font-semibold text-gray-200">{exp.company}</p>
                      {exp.via && <p className="text-sm text-gray-400 mt-1">{exp.via}</p>}
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6 text-gray-300">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-left">
                          <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 text-left">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-900/40 text-primary-300 rounded-md text-xs font-mono border border-primary-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={index % 2 === 0 ? 'hidden md:block' : 'hidden md:block md:col-start-1'}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
