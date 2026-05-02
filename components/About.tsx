'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Enterprise Architecture',
    items: ['Microservices', 'SOA', 'Cloud-Native', 'Distributed Systems', 'Event-Driven', 'Architecture Governance'],
  },
  {
    category: 'Platform Engineering',
    items: ['Java 8–21', 'Spring Boot', 'Spring AOP', 'RESTful APIs', 'Kafka', 'JMS / ActiveMQ'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'Bamboo', 'CI/CD Pipelines', 'SAFe'],
  },
  {
    category: 'Security & Compliance',
    items: ['Fortify', 'Veracode', 'Aqua', 'Snyk', 'Black Duck', 'Coverity', 'JWT'],
  },
  {
    category: 'Observability & Monitoring',
    items: ['Dynatrace', 'OpenTelemetry', 'Splunk', 'Kibana'],
  },
  {
    category: 'AI & Modern Delivery',
    items: ['AI-Assisted Development', 'GitHub Copilot', 'Vibe Coding', 'Angular v11–v19'],
  },
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
                Principal Enterprise Architect with <span className="text-primary-400 font-semibold">20+ years of experience</span> defining
                architecture strategy, governing technology standards, and delivering mission-critical platform modernization
                across healthcare, finance, and telecom.
              </p>
              <p>
                Deep technical authority across the full Java ecosystem (J2EE through Java 21), cloud-native infrastructure,
                event-driven architecture, and enterprise security — with hands-on delivery credibility at every layer.
              </p>
              <p>
                Proven leader in driving digital transformation initiatives: decomposing legacy monoliths, establishing
                engineering governance, championing AI-assisted development, and leading distributed global teams.
              </p>
              <p>
                SAFe practitioner with a track record of translating complex business and regulatory requirements into
                scalable, secure, and maintainable enterprise platforms.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="font-semibold text-xl mb-4 text-primary-300">Key Achievements</h4>
              <ul className="space-y-3">
                {[
                  'Defined reference architecture adopted across 5+ mission-critical enterprise platforms',
                  'Zero critical unresolved vulnerabilities sustained across all production systems',
                  'Led cloud-native decomposition of legacy monoliths enabling zero-downtime deployments',
                  'Established org-wide AI-assisted development standards accelerating delivery velocity',
                ].map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
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
