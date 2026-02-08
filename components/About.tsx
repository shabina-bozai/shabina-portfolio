'use client'

import { motion } from 'framer-motion'

const skills = [
  { category: 'Architecture', items: ['Principal-Level Architecture', 'Microservices Design', 'Distributed Systems', 'Application Modernization'] },
  { category: 'Backend', items: ['Java 8-21', 'Spring Boot', 'Spring AOP', 'RESTful APIs'] },
  { category: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines'] },
  { category: 'Data & Security', items: ['Oracle', 'PostgreSQL', 'JWT', 'OAuth', 'Fortify'] },
  { category: 'AI & Modern Tools', items: ['GitHub Copilot', 'AI-Assisted Development', 'Code Quality Tools'] },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8 md:p-10"
          >
            <h3 className="font-display text-3xl font-semibold mb-6 text-primary-400">
              Professional Summary
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Principal Software Developer with <span className="text-primary-400 font-semibold">20+ years of experience</span> architecting, 
                modernizing, and delivering mission-critical enterprise platforms across healthcare, finance, and telecom domains.
              </p>
              <p>
                Deep expertise in Java (8–21), Spring ecosystem, microservices, and distributed systems, with a strong focus 
                on scalability, security, and long-term maintainability.
              </p>
              <p>
                Proven leader in driving technical strategy, mentoring senior engineers, and partnering with architects 
                and business stakeholders to translate complex requirements into robust solutions.
              </p>
              <p>
                Hands-on practitioner with modern DevOps, private cloud (Docker, Kubernetes), and AI-assisted development 
                using GitHub Copilot to improve engineering velocity and quality.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="font-semibold text-xl mb-4 text-primary-300">Key Achievements</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Reduced production defects by ~30% through engineering best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Led multiple COBOL-to-Java modernization initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Architected cloud-ready microservices on private cloud infrastructure</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
              >
                <h4 className="font-semibold text-xl mb-4 text-accent-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary-900/30 text-gray-300 rounded-lg text-sm border border-primary-700/30 hover:border-primary-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
