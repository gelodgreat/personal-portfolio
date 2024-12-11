import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
	{
		title: 'Senior Mobile Developer',
		company: 'Blackpepper (Auckland, New Zealand)',
		period: 'Aug 2022 - Dec 2024',
		description: 'Developed and maintained six e-commerce mobile applications for the AU and NZ markets, focusing on performance optimization, seamless user experience, and efficient deployment through CI/CD pipeline integration.',
		achievements: [
			{
				title: 'Mobile Application Development',
				description: 'Developed and maintained six mobile e-commerce applications using React Native and related technologies, ensuring high performance, seamless functionality, and exceptional user experience.',
			},
			{ title: 'Cross-Functional Collaboration', description: 'Worked closely with cross-functional teams, including designers, product managers, and backend developers, to design, implement, and troubleshoot new features and resolve issues.' },
			{ title: 'Third-Party Integrations', description: 'Integrated various third-party libraries and APIs to enhance app functionality and improve the overall user experience.' },
			{ title: 'Performance Optimization', description: 'Conducted thorough code analysis and profiling, implementing targeted performance optimizations to improve app speed and responsiveness.' },
			{ title: 'Code Quality & Best Practices', description: 'Actively participated in code reviews to ensure adherence to industry best practices, maintainability, and high-quality standards.' },
			{ title: 'API Integration', description: 'Integrated APIs using GraphQL and REST with AWS Lambda to ensure efficient and scalable communication between app and backend systems.' },
		],
	},
	{
		title: 'Lead Mobile Developer',
		company: 'FTBLRLIFE (United States of America)',
		period: 'Nov 2022',
		description: 'Developed and maintained scalable, cross-platform mobile applications using React Native, ensuring seamless functionality, consistent user experiences, and optimized performance.',
		achievements: [
			{ title: 'Project Management Excellence', description: 'Utilized ClickUp for effective project management, improving issue tracking and reporting efficiency by 70%.' },
			{ title: 'Content Moderation & Communication', description: 'Implemented content moderation, user messaging, and real-time notifications to enhance user engagement and communication within the app.' },
			{ title: 'Enhanced User Experience', description: 'Upgraded video playback functionality, resulting in a smoother and more engaging user experience in a social media-centric app.' },
			{ title: 'Performance Optimization', description: 'Analyzed and profiled app code to implement performance optimizations, ensuring a faster and more responsive application.' },
			{ title: 'CI/CD Pipeline Development', description: 'Designed and maintained robust CI/CD pipelines using Fastlane, streamlining the development and deployment process for faster release cycles.' },
			{ title: 'Third-Party Integration', description: 'Successfully integrated third-party services, including push notifications, with a focus on scalability and security.' },
			{ title: 'Error Handling & Analytics', description: 'Developed and integrated sophisticated error handling and analytics tracking systems to monitor app stability and support data-driven decisions.' },
			{ title: 'Strategic Feature Development', description: 'Collaborated with company founders to define and prioritize feature development, ensuring alignment with both business objectives and user needs.' },
			{ title: 'Code Quality & Best Practices', description: 'Actively participated in code reviews, maintaining high standards of code quality, adherence to best practices, and timely delivery.' },
			{ title: 'Cross-Functional Collaboration', description: 'Partnered closely with designers, product managers, and backend developers to ensure smooth collaboration and a cohesive user experience.' },
			{ title: 'Team Leadership & Mentorship', description: 'Led and mentored a React Native developer, fostering the development of mobile applications while upholding best practices in code quality and design.' },
			{ title: 'Junior Developer Guidance', description: 'Mentored junior developers, helping them understand code quality, design patterns, and industry best practices.' },
		],
	},
	{
		title: 'Freelance Senior Mobile Developer',
		company: 'Urban.com.au (Melbourne, Australia)',
		period: 'Nov 2022 - Apr 2023',
		description: 'Developed and maintained a cross-platform mobile application using React Native, ensuring seamless performance, scalability, and user-friendly design.',
		achievements: [
			{ title: 'Feature Development', description: 'Spearheaded the development of new features to enhance the app’s functionality, resulting in a significantly improved user experience.' },
			{ title: 'User Interaction Tracking', description: 'Integrated a platform to monitor and track successful inquiries and user interactions, providing valuable insights for future enhancements.' },
			{ title: 'Deployment Automation', description: 'Streamlined the deployment process by automating the flow using Fastlane, reducing manual effort and ensuring more efficient releases.' },
			{ title: 'Build Optimization', description: 'Optimized the app’s build deployment for both Android and iOS, improving the deployment speed and consistency across platforms.' },
			{ title: 'Modernized Codebase', description: 'Introduced modern coding techniques to improve code quality and maintainability, ensuring a scalable and efficient monolithic codebase.' },
			{ title: 'Codebase Improvement', description: 'Conducted a thorough cleanup of the codebase, leading to better app performance, reliability, and overall stability.' },
			{ title: 'App Enhancement', description: 'Implemented deep linking and push notifications, enhancing user engagement and improving app usability.' },
		],
	},
	{
		title: 'Senior Software Developer',
		company: 'StationFive/Adaca (Sydney, Australia)',
		period: 'Aug 2020 - Aug 2022',
		description:
			'Built and maintained responsive web and mobile applications, delivering seamless user experiences and scalable solutions across devices and platforms. Leveraged modern technologies to optimize performance, enhance functionality, and ensure compatibility. Focused on intuitive design and maintainability to meet user and business needs effectively.',
		achievements: [
			{ title: 'Mobile & Web Development', description: 'Developed and maintained web and mobile applications using React, React Native, Redux, and Redux-Saga, ensuring seamless cross-platform functionality and performance.' },
			{ title: 'CI/CD Pipeline Management', description: 'Managed Continuous Integration and Continuous Delivery (CI/CD) for mobile apps, ensuring smooth deployment on both Android and iOS platforms.' },
			{ title: 'Performance & Reliability', description: 'Focused on optimizing application performance and ensuring reliability through rigorous testing and monitoring.' },
			{ title: 'API Integrations', description: 'Integrated REST APIs to ensure seamless communication between the frontend and backend systems.' },
			{ title: 'Code Quality & Review', description: 'Conducted thorough code reviews to ensure that all code is production-ready, maintaining high standards of quality and functionality.' },
			{ title: 'Automated Deployment', description: 'Set up automated mobile app deployments using Bitrise, facilitating smooth releases to Google Play Store and Apple App Store.' },
			{ title: 'UI/UX Adherence', description: 'Ensured that the application UI closely followed Figma designs and was correctly implemented across both iOS and Android platforms.' },
			{ title: 'Feature Implementation', description: 'Developed and implemented critical features, including market requests and trade transactions, enhancing the app’s core functionality.' },
			{ title: 'Mobile App Deployment', description: 'Developed, maintained, and deployed four mobile applications to the Google Play Store and Apple App Store, ensuring timely and successful launches.' },
			{ title: 'Web Application Deployment', description: 'Developed, maintained, and deployed three React web applications, contributing to a consistent and reliable web experience for users.' },
		],
	},
	{
		title: 'Lead Mobile Developer',
		company: 'Taply, Inc - (Toronto, Canada)',
		period: 'June 2020 - July 2022',
		description:
			'Developed and maintained a React Native mobile application for a NO-CODE platform, supporting over 1,000 eCommerce businesses. Deployed the app on Google Play Store and Apple App Store, ensuring scalability, performance, and user-friendly functionality for diverse business needs.',
		achievements: [
			{
				title: 'Mobile App Development & Maintenance',
				description: 'Developed and maintained a React Native mobile application for a no-code platform, serving over 1,000 eCommerce businesses, and deployed it to Google Play Store and Apple App Store.',
			},
			{ title: 'App Deployment', description: 'Published and deployed more than 300 mobile applications on the Google Play Store and Apple App Store.' },
			{ title: 'Feature Enhancement', description: 'Added and improved key eCommerce features, significantly boosting customer sales.' },
			{ title: 'CI/CD Process', description: 'Managed continuous integration and delivery (CI/CD) automation for iOS and Android deployments using Bitrise, Fastlane, and Puppeteer.' },
			{ title: 'Third-Party Integrations', description: 'Integrated critical third-party services such as Facebook SDK, Google SDK, OneSignal, Shopify SDK API, and GraphQL for enhanced eCommerce functionality.' },
			{ title: 'UI/UX Adherence', description: 'Ensured UI components adhered to Figma designs, maintaining consistency across both iOS and Android platforms.' },
			{ title: 'Testing & Code Quality', description: 'Implemented E2E testing automation using Detox and Jest for React Native and conducted code reviews to ensure production-ready code.' },
			{ title: 'Customer Support & Feedback', description: 'Improved tech customer service and implemented strategies based on ongoing customer feedback to enhance the user experience.' },
			{ title: 'Analytics & Notifications', description: 'Integrated mobile analytics and push notifications, supporting over 147,000 end-users monthly.' },
			{ title: 'User Growth', description: 'Implemented a smart app banner feature, boosting user growth by 23% month-over-month.' },
			{ title: 'Global Expansion', description: 'Added multi-currency support to the mobile app to enable global use.' },
			{ title: 'Project Management', description: 'Utilized Trello for project management, improving team productivity and collaboration.' },
			{ title: 'Leadership', description: 'Led and mentored a junior developer, contributing to team skill development.' },
		],
	},
	{
		title: 'Software Developer & Lead Developer',
		company: 'Trends and Technologies (Makati, Philippines)',
		period: 'May 2017 - Aug Sept 2020',
		description: 'Developed web and mobile applications along with APIs, tailored to meet diverse client requirements. Delivered scalable, user-friendly, and high-performance solutions aligned with client business goals.',
		achievements: [
			{ title: 'Team Leadership', description: 'Led a cross-functional team of 5 developers, consisting of 2 front-end developers, 2 backend developers, and 1 QA engineer, ensuring effective collaboration and timely delivery of projects.' },
			{ title: 'API Development & Integration', description: 'Spearheaded the development and integration of REST APIs using Express and Node.js, ensuring robust and scalable backend services.' },
			{ title: 'Mobile Application Development', description: 'Led the design and development of mobile applications, focusing on performance, user experience, and seamless functionality across platforms.' },
			{
				title: 'Software Development with React & TypeScript',
				description: 'Developed and maintained high-quality software solutions using React and TypeScript, improving code maintainability, scalability, and performance across web applications.',
			},
			{ title: 'Project Deployment', description: 'Successfully deployed between 4-10 projects, ensuring smooth releases and minimal downtime, and overseeing the deployment pipeline to production across different environments.' },
		],
	},
];

export const Experience = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0,
	});
	// const inView = true;
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
										<Achievement key={i} {...achievement} />
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

const Achievement = ({ title, description }: { title: string; description: string }) => (
	<li className='text-gray-300'>
		{title && <b>{title}:</b>} {description}
	</li>
);
