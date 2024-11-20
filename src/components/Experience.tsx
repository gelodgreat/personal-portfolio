import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
	{
		title: 'Senior Mobile Developer',
		company: 'Blackpepper (Auckland, New Zealand)',
		period: 'Aug 2022 - Dec 2024',
		description: 'Developed and maintained 6 mobile applications for e-commerce applications targeting AU and NZ markets, and implemented CI/CD pipelines.',
		achievements: ['Architected one of the latest applications with better code practices', 'Introduced new technologies to the team', 'Optimized app application and reduced app crashes'],
	},
	{
		title: 'Lead Mobile Developer',
		company: 'FTBLRLIFE (United States of America)',
		period: 'Nov 2022',
		description: 'Developed and maintained mobile application using React Native.',
		achievements: ['Automated and improved application deployment by 90%', 'Introduced modern coding practices', 'Implemented deep linking and push notifications', 'Led a team of 3 developers', 'Handled project management and client communication'],
	},
	{
		title: 'Freelance Senior Mobile Developer',
		company: 'Urban.com.au (Melbourne, Australia)',
		period: 'Nov 2022 - Apr 2023',
		description: 'Developed and maintained mobile application using React Native.',
		achievements: ['Automated and improved application deployment by 90%', 'Introduced modern coding practices', 'Implemented deep linking and push notifications'],
	},
	{
		title: 'Senior Software Developer',
		company: 'StationFive/Adaca (Sydney, Australia)',
		period: 'Aug 2020 - Aug 2022',
		description: 'Built and maintained responsive web applications and mobile applications.',
		achievements: ['Maintained Continuous Integration/Continuous Delivery (CICD) in deployed Mobile apps on Android and iOS.', 'API Integrations with REST AP', 'Implemented critical features such as Market Requests, Trade transactions'],
	},
	{
		title: 'Lead Mobile Developer',
		company: 'Taply, Inc - (Toronto, Canada)',
		period: 'June 2020 - July 2022',
		description: 'Developed and Maintained a Mobile Application for a NO-CODE Platform running on React Native that’s used by more than 1,000 eCommerce businesses of all sizes and deployed it on Google Play Store and Apple App Store.',
		achievements: [
			'Published and deployed more than 300 applications on Google Play Store and Apple App Store',
			'Added and improved multiple critical eCommerce features to the mobile application that boost customer sales.',
			'Maintained and developed continous integration,continuous delivery process that automates iOS and Android deployments using Bitrise, Fastlane and Puppeteer (DevOps).',
		],
	},
	{
		title: 'Software Developer & Lead Developer',
		company: 'Trends and Technologies (Makati, Philippines)',
		period: 'May 2017 - Aug Sept 2020',
		description: "Developed Web, Mobile Applications and API that caters to the clients' requirements",
		achievements: ['Led a team of 5 developers composing of 2 front-end, 2 backend and 1 QA engineers', 'API development and integrations with REST API using express and node', 'Developed mobile applications'],
	},
];

export const Experience = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className='py-20 bg-gray-900' id='experience'>
			<div className='container mx-auto px-4'>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} transition={{ duration: 0.6 }} className='text-center mb-16'>
					<Briefcase className='w-12 h-12 mx-auto mb-4 text-emerald-400' />
					<h2 className='text-4xl font-bold text-white'>Work Experience</h2>
				</motion.div>
				<div ref={ref} className='max-w-4xl mx-auto space-y-12'>
					{experiences.map((exp, index) => (
						<motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }} transition={{ duration: 0.5, delay: index * 0.2 }} className='relative pl-8 border-l-2 border-emerald-400'>
							<div className='absolute w-4 h-4 bg-emerald-400 rounded-full -left-[9px] top-0' />
							<div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
								<h3 className='text-xl font-bold text-white mb-1'>{exp.title}</h3>
								<p className='text-emerald-400 mb-2'>{exp.company}</p>
								<p className='text-gray-400 text-sm mb-4'>{exp.period}</p>
								<p className='text-gray-300 mb-4'>{exp.description}</p>
								<ul className='list-disc list-inside space-y-2'>
									{exp.achievements.map((achievement, i) => (
										<li key={i} className='text-gray-300'>
											{achievement}
										</li>
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
