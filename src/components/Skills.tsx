import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Settings, Server, Shield, Phone } from 'lucide-react';

const skillCategories = [
	{
		title: 'Frontend Development',
		icon: Layout,
		skills: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Redux', 'Zustand'],
	},
	{
		title: 'Mobile Development',
		icon: Phone,
		skills: ['React Native', 'TypeScript', 'Firebase', 'Expo', 'Supabase', 'GraphQL', 'Amplify'],
	},
	{
		title: 'Backend Development',
		icon: Server,
		skills: ['Node.js', 'Python', 'Express', 'GraphQL', 'REST APIs'],
	},
	{
		title: 'Database',
		icon: Database,
		skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'MySQL'],
	},
	{
		title: 'DevOps',
		icon: Settings,
		skills: ['Fastlane', 'Bitrise', 'AWS', 'CI/CD'],
	},
	{
		title: 'Programming Languages',
		icon: Code2,
		skills: ['JavaScript', 'TypeScript', 'Python'],
	},
];

export const Skills = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className='py-20 bg-gray-900' id='skills'>
			<div className='container mx-auto px-4'>
				<motion.h2 initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 0.5 }} className='text-4xl font-bold text-center text-white mb-16'>
					Skills & Technologies
				</motion.h2>
				<div ref={ref} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{skillCategories.map((category, index) => {
						const Icon = category.icon;
						return (
							<motion.div key={category.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} transition={{ duration: 0.5, delay: index * 0.1 }} className='bg-gray-800 rounded-lg p-6 shadow-lg'>
								<div className='flex items-center mb-4'>
									<Icon className='w-6 h-6 text-emerald-400 mr-3' />
									<h3 className='text-xl font-bold text-white'>{category.title}</h3>
								</div>
								<div className='flex flex-wrap gap-2'>
									{category.skills.map((skill) => (
										<span key={skill} className='px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm'>
											{skill}
										</span>
									))}
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
