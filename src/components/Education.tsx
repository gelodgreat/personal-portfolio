import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const education = [
	{
		degree: 'Bachelor of Information Technology',
		school: 'Centro Escolar University',
		period: '2013 - 2017',
		description: 'Specialized in Application Development, Networking',
		achievements: [
			<>
				<b>Published Research Paper:</b> Authored a research paper that introduced innovative strategies to enhance productivity in a specific school department, contributing to streamlined operations and measurable improvements in efficiency.
			</>,
			<>
				<b>Dean’s Lister:</b> Consistently recognized for academic excellence, achieving Dean’s List honors for outstanding performance throughout [specify the time period or semesters if possible].
			</>,
			<>
				<b>Mobile Application Development:</b> Designed and developed a user-centric mobile application tailored to meet the school’s needs, providing seamless functionality and enhancing engagement among students and staff.
			</>,
			<>
				<b>Desktop Application Development:</b> Created a robust desktop application for the school to address administrative or operational challenges, ensuring high performance, reliability, and usability.
			</>,
		],
	},
];

export const Education = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className='py-20 bg-black' id='education'>
			<div className='container mx-auto px-4'>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} transition={{ duration: 0.6 }} className='text-center mb-16'>
					<GraduationCap className='w-12 h-12 mx-auto mb-4 text-emerald-400' />
					<h2 className='text-4xl font-bold text-white'>Education</h2>
				</motion.div>
				<div ref={ref} className='max-w-4xl mx-auto grid gap-8'>
					{education.map((edu, index) => (
						<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} transition={{ duration: 0.5, delay: index * 0.2 }} className='bg-gray-800 rounded-lg p-6 shadow-lg'>
							<h3 className='text-xl font-bold text-white mb-1'>{edu.degree}</h3>
							<p className='text-emerald-400 mb-2'>{edu.school}</p>
							<p className='text-gray-400 text-sm mb-4'>{edu.period}</p>
							<p className='text-gray-300 mb-4'>{edu.description}</p>
							<ul className='list-disc list-inside space-y-2'>
								{edu.achievements.map((achievement, i) => (
									<li key={i} className='text-gray-300'>
										{achievement}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
