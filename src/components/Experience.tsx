import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2020 - Present',
    description: 'Led development of cloud-native applications, mentored junior developers, and implemented CI/CD pipelines.',
    achievements: [
      'Reduced deployment time by 60% through automation',
      'Implemented microservices architecture',
      'Led a team of 5 developers'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc',
    period: '2018 - 2020',
    description: 'Developed and maintained full-stack web applications using React and Node.js.',
    achievements: [
      'Improved application performance by 40%',
      'Implemented real-time features using WebSocket',
      'Developed REST APIs'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'StartUp Labs',
    period: '2016 - 2018',
    description: 'Built responsive web applications and implemented UI/UX designs.',
    achievements: [
      'Developed component library',
      'Optimized website load time',
      'Implemented analytics dashboard'
    ]
  }
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Briefcase className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
          <h2 className="text-4xl font-bold text-white">Work Experience</h2>
        </motion.div>
        <div ref={ref} className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-emerald-400"
            >
              <div className="absolute w-4 h-4 bg-emerald-400 rounded-full -left-[9px] top-0" />
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-emerald-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300">{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};