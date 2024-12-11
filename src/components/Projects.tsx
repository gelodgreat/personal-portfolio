import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
	{
		title: 'FTBLRLife',
		description: 'Sports mobile applications that connect and empower talented individuals in the sports industry by showcasing skills, tracking performance, and facilitating networking with scouts, coaches, and organizations.',
		image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'Redux', 'GraphQL', 'Typescript'],
		live: [
			{
				title: 'FTBLRLife for Android',
				url: 'https://play.google.com/store/apps/details?id=com.footballer.app',
			},
			{
				title: 'FTBLRLife for iOS',
				url: 'https://apps.apple.com/ph/app/ftblrlife/id6444323230',
			},
		],
	},
	{
		title: 'Glassons',
		description: 'A streamlined e-commerce mobile application for Glassons, offering a seamless shopping experience with intuitive navigation, personalized recommendations, secure checkout, and exclusive app-only deals.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'AWS Amplify', 'GraphQL', 'Typescript'],
		live: [
			{
				title: 'Glassons Android',
				url: 'https://play.google.com/store/apps/details?id=com.glassons.customer.app&hl=en',
			},
			{
				title: 'Glassons iOS',
				url: 'https://apps.apple.com/nz/app/glassons/id1525273016',
			},
		],
	},
	{
		title: 'Hallensteins',
		description:
			'A modern e-commerce mobile application for Hallensteins, delivering a seamless shopping experience with user-friendly navigation, personalized product recommendations, secure checkout, and exclusive app-only promotions tailored for the brand’s customers.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'AWS Amplify', 'GraphQL', 'Typescript'],
		live: [
			{
				title: 'Hallensteins Android',
				url: 'https://play.google.com/store/apps/details?id=com.hallensteins.customer.app&hl=en',
			},
			{
				title: 'Hallensteins iOS',
				url: 'https://apps.apple.com/nz/app/hallensteins/id6453358386',
			},
		],
	},
	{
		title: 'RedRat',
		description:
			'A feature-rich e-commerce mobile application for RedRat, offering a seamless shopping experience with intuitive navigation, personalized product suggestions, secure payment options, and exclusive app-only deals, tailored to meet the needs of RedRat customers.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'AWS Amplify', 'GraphQL', 'Typescript'],
		live: [
			{
				title: 'RedRat Android',
				url: 'https://play.google.com/store/apps/details?id=nz.co.redrat.app&hl=en',
			},
			{
				title: 'RedRat iOS',
				url: 'https://apps.apple.com/nz/app/red-rat/id1551890750',
			},
		],
	},
	{
		title: 'Urban.com.au',
		description:
			'A comprehensive real estate mobile application for Urban.com.au, providing users with seamless property search, personalized recommendations, detailed insights, and streamlined communication with agents, all tailored to enhance the buying, selling, and renting experience.',
		image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'Redux', 'Typescript'],
		live: [
			{
				title: 'Urban.com.au',
				url: 'https://www.urban.com.au/',
			},
		],
	},
	{
		title: 'Taply Mobile App',
		description:
			'A robust eCommerce mobile application built with React Native and seamlessly integrated with Shopify, serving over 2,000 clients with more than 300 apps deployed on the Play Store and App Store. It features an automated deployment process, managing everything from app creation and customization to listing and release on the respective stores.',
		image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',

		tech: ['React', 'Firebase', 'React Native', 'Redux', 'Typescript'],
		live: [
			{
				title: 'Taply',
				url: 'https://play.google.com/store/apps/details?id=io.taply.initial',
			},
			{
				title: 'Sunbeams Lifestyle',
				url: 'https://play.google.com/store/apps/details?id=io.taply.sunbeamslifestyle&hl=en_US&gl=US',
			},
			{
				title: 'MyHackerTech',
				url: 'https://play.google.com/store/apps/details?id=io.taply.myhackertech&hl=en_US&gl=US',
			},
		],
	},
	{
		title: 'SFM Blue Mobile Applications',
		description:
			'An advanced eCommerce mobile app designed for one of Australia’s largest fishery markets, empowering local vendors to seamlessly buy and sell goods. The app offers a wide range of sophisticated features tailored to meet the unique needs of the fishery industry.',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'Redux', 'Typescript'],
		live: [
			{
				url: 'https://apps.apple.com/us/app/sfmblue-seller/id1623529645',
				title: 'SFM Blue Seller iOS',
			},
			{
				url: 'https://apps.apple.com/us/app/sfmblue-buyer/id1623528874',
				title: 'SFM Blue Buyer iOS',
			},
			{
				url: 'https://play.google.com/store/apps/details?id=com.shoretradeapp.sfmseller&hl=en&gl=US',
				title: 'SFM Blue Seller Android',
			},
			{
				url: 'https://play.google.com/store/apps/details?id=com.shoretradeapp.sfmbuyer&hl=en&gl=US',
				title: 'SFM Blue Buyer Android',
			},
		],
	},

	{
		title: 'ShoreTrade Mobile Applications',
		description:
			'An advanced eCommerce mobile app designed for one of Australia’s largest fishery markets, empowering local vendors to seamlessly buy and sell goods. The app offers a wide range of sophisticated features tailored to meet the unique needs of the fishery industry.',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
		tech: ['React', 'Firebase', 'React Native', 'Redux', 'Typescript'],
		live: [
			{
				url: 'https://apps.apple.com/us/app/shoretrade-buyer/id1460087124',
				title: 'ShoreTrade Seller iOS',
			},
			{
				url: 'https://apps.apple.com/ph/app/shoretrade-seller/id1460087449',
				title: 'ShoreTrade Buyer iOS',
			},
			{
				url: 'https://play.google.com/store/apps/details?id=com.shoretradeapp.seller&hl=en_US&gl=US',
				title: 'ShoreTrade Seller Android',
			},
			{
				url: 'https://play.google.com/store/apps/details?id=com.shoretradeapp.buyer&hl=en_US&gl=US',
				title: 'ShoreTrade Buyer Android',
			},
		],
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
								<div className='grid grid-cols-2 gap-4'>
									{project?.github && (
										<a href={project?.github} className='text-gray-300 hover:text-emerald-400 transition-colors'>
											<Github className='w-6 h-6' />
										</a>
									)}

									{project.live &&
										project.live.map((link, linkIndex) => (
											<a key={linkIndex} href={link.url} className='text-gray-300 hover:text-emerald-400 transition-colors block'>
												<span className='underline'>{link.title}</span>
											</a>
										))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
