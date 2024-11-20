import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
	{
		title: 'FTBLRLife for Android',
		description: 'Sports mobile applications that provides opportunities for talented people in the sports industry',
		image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'Redux', 'GraphQL', 'Typescript'],
		live: 'https://play.google.com/store/apps/details?id=com.footballer.app',
	},
	{
		title: 'FTBLRLife for iOS',
		description: 'Sports mobile applications that provides opportunities for talented people in the sports industry',
		image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'Redux', 'GraphQL', 'Typescript'],
		live: 'https://apps.apple.com/ph/app/ftblrlife/id6444323230',
	},
	{
		title: 'Glassons Android',
		description: 'An e-commerce mobile application for Glassons on Android',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'AWS Amplify', 'GraphQL', 'Typescript'],
		live: 'https://play.google.com/store/apps/details?id=com.glassons.customer.app&hl=en',
	},
	{
		title: 'Glassons iOS',
		description: 'An e-commerce mobile application for Glassons on iOS',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'AWS Amplify', 'GraphQL', 'Typescript'],
		live: 'https://apps.apple.com/nz/app/glassons/id1525273016',
	},
	{
		title: 'RedRat Android',
		description: 'An e-commerce mobile application for RedRat on Android',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'AWS Amplify', 'GraphQL', 'Typescript'],
		live: 'https://play.google.com/store/apps/details?id=nz.co.redrat.app&hl=en',
	},
	{
		title: 'RedRat iOS',
		description: 'An e-commerce mobile application for RedRat on iOS',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'AWS Amplify', 'GraphQL', 'Typescript'],
		live: 'https://apps.apple.com/nz/app/red-rat/id1551890750',
	},
	{
		title: 'Urban.com.au',
		description: 'A real estate application for Urban.com.au on iOS',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'Redux', 'Typescript'],
		live: 'https://www.urban.com.au/',
	},
	{
		title: 'Taply Mobile App',
		description:
			'An eCommerce mobile application that is integrated with Shopify and built using React Native, with more than 2000 clients and over 300 applications deployed on the Playstore and AppStore, Also this manages an automation deployment of the app from creating and listing the app upto releasing to the store.',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'Redux', 'Typescript'],
		live: 'https://play.google.com/store/apps/details?id=io.taply.initial',
	},
	{
		title: 'ShoreTrade and SFM Blue Mobile Applications',
		description: 'An eCommerce mobile app for one of the biggest fishery markets in Australia that helps local vendors buy and sell their goods with various and complex features.',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'Redux', 'Typescript'],
		live: 'https://apps.apple.com/us/app/sfm-blue-seller/id1623529645',
	},
];

export const Projects = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className='py-20 bg-gray-900' id='projects'>
			<div className='container mx-auto px-4'>
				<motion.h2 initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 0.5 }} className='text-4xl font-bold text-center text-white mb-16'>
					Featured Projects
				</motion.h2>
				<div ref={ref} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<motion.div key={project.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} transition={{ duration: 0.5, delay: index * 0.2 }} className='bg-gray-800 rounded-lg overflow-hidden shadow-lg'>
							<img src={project.image} alt={project.title} className='w-full h-48 object-cover' />
							<div className='p-6'>
								<h3 className='text-xl font-bold text-white mb-2'>{project.title}</h3>
								<p className='text-gray-300 mb-4'>{project.description}</p>
								<div className='flex flex-wrap gap-2 mb-4'>
									{project.tech.map((tech) => (
										<span key={tech} className='px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm'>
											{tech}
										</span>
									))}
								</div>
								<div className='flex space-x-4'>
									{project.github && (
										<a href={project.github} className='text-gray-300 hover:text-emerald-400 transition-colors'>
											<Github className='w-6 h-6' />
										</a>
									)}
									{project.live && (
										<a href={project.live} className='text-gray-300 hover:text-emerald-400 transition-colors'>
											<ExternalLink className='w-6 h-6' />
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
