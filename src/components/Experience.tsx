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
		achievements: [
			<>
				<b>Mobile Application Development: </b>Developed and maintained six mobile e-commerce applications using React Native and related technologies, ensuring high performance, seamless functionality, and exceptional user experience.
			</>,
			<>
				<b>Cross-Functional Collaboration: </b>Worked closely with cross-functional teams, including designers, product managers, and backend developers, to design, implement, and troubleshoot new features and resolve issues.
			</>,
			<>
				<b>Third-Party Integrations: </b>Integrated various third-party libraries and APIs to enhance app functionality and improve the overall user experience.
			</>,
			<>
				<b>Performance Optimization: </b>Conducted thorough code analysis and profiling, implementing targeted performance optimizations to improve app speed and responsiveness.
			</>,
			<>
				<b>Code Quality & Best Practices: </b>Actively participated in code reviews to ensure adherence to industry best practices, maintainability, and high-quality standards.
			</>,
			<>
				<b>API Integration: </b>Integrated APIs using GraphQL and REST with AWS Lambda to ensure efficient and scalable communication between app and backend systems.
			</>,
		],
	},
	{
		title: 'Lead Mobile Developer',
		company: 'FTBLRLIFE (United States of America)',
		period: 'Nov 2022',
		description: 'Developed and maintained mobile application using React Native.',
		achievements: [
			<>
				<b>Project Management Excellence: </b>Utilized ClickUp for effective project management, improving issue tracking and reporting efficiency by 70%.
			</>,
			<>
				<b>Content Moderation & Communication:</b> Implemented content moderation, user messaging, and real-time notifications to enhance user engagement and communication within the app.
			</>,
			<>
				<b>Enhanced User Experience:</b> Upgraded video playback functionality, resulting in a smoother and more engaging user experience in a social media-centric app.
			</>,
			<>
				<b>Performance Optimization:</b> Analyzed and profiled app code to implement performance optimizations, ensuring a faster and more responsive application.
			</>,
			<>
				<b>CI/CD Pipeline Development: </b>Designed and maintained robust CI/CD pipelines using Fastlane, streamlining the development and deployment process for faster release cycles.
			</>,
			<>
				<b>Third-Party Integration: </b>Successfully integrated third-party services, including push notifications, with a focus on scalability and security.
			</>,
			<>
				<b>Error Handling & Analytics: </b>Developed and integrated sophisticated error handling and analytics tracking systems to monitor app stability and support data-driven decisions.
			</>,
			<>
				<b>Strategic Feature Development: </b>Collaborated with company founders to define and prioritize feature development, ensuring alignment with both business objectives and user needs.
			</>,
			<>
				<b>Code Quality & Best Practices:</b> Actively participated in code reviews, maintaining high standards of code quality, adherence to best practices, and timely delivery.
			</>,
			<>
				<b>Cross-Functional Collaboration: </b>Partnered closely with designers, product managers, and backend developers to ensure smooth collaboration and a cohesive user experience.
			</>,
			<>
				<b>Team Leadership & Mentorship: </b>Led and mentored a React Native developer, fostering the development of mobile applications while upholding best practices in code quality and design.
			</>,
			<>
				<b>Junior Developer Guidance: </b>Mentored junior developers, helping them understand code quality, design patterns, and industry best practices.
			</>,
		],
	},
	{
		title: 'Freelance Senior Mobile Developer',
		company: 'Urban.com.au (Melbourne, Australia)',
		period: 'Nov 2022 - Apr 2023',
		description: 'Developed and maintained mobile application using React Native.',
		achievements: [
			<>
				<b>Feature Development: </b>Spearheaded the development of new features to enhance the app’s functionality, resulting in a significantly improved user experience.
			</>,
			<>
				<b>User Interaction Tracking: </b>Integrated a platform to monitor and track successful inquiries and user interactions, providing valuable insights for future enhancements.
			</>,
			<>
				<b>Deployment Automation: </b>Streamlined the deployment process by automating the flow using Fastlane, reducing manual effort and ensuring more efficient releases.
			</>,
			<>
				<b>Build Optimization: </b>Optimized the app’s build deployment for both Android and iOS, improving the deployment speed and consistency across platforms.
			</>,
			<>
				<b>Modernized Codebase: </b>Introduced modern coding techniques to improve code quality and maintainability, ensuring a scalable and efficient monolithic codebase.
			</>,
			<>
				<b>Codebase Improvement: </b>Conducted a thorough cleanup of the codebase, leading to better app performance, reliability, and overall stability.
			</>,
			<>
				<b>App Enhancement: </b>Implemented deep linking and push notifications, enhancing user engagement and improving app usability.
			</>,
		],
	},
	{
		title: 'Senior Software Developer',
		company: 'StationFive/Adaca (Sydney, Australia)',
		period: 'Aug 2020 - Aug 2022',
		description: 'Built and maintained responsive web applications and mobile applications.',
		achievements: [
			<>
				<b>Mobile & Web Development:</b> Developed and maintained web and mobile applications using React, React Native, Redux, and Redux-Saga, ensuring seamless cross-platform functionality and performance.
			</>,
			<>
				<b>CI/CD Pipeline Management:</b> Managed Continuous Integration and Continuous Delivery (CI/CD) for mobile apps, ensuring smooth deployment on both Android and iOS platforms.
			</>,
			<>
				<b>Performance & Reliability:</b> Focused on optimizing application performance and ensuring reliability through rigorous testing and monitoring.
			</>,
			<>
				<b>API Integrations:</b> Integrated REST APIs to ensure seamless communication between the frontend and backend systems.
			</>,
			<>
				<b> Code Quality & Review:</b> Conducted thorough code reviews to ensure that all code is production-ready, maintaining high standards of quality and functionality.
			</>,
			<>
				<b>Automated Deployment:</b> Set up automated mobile app deployments using Bitrise, facilitating smooth releases to Google Play Store and Apple App Store.
			</>,
			<>
				<b>UI/UX Adherence:</b> Ensured that the application UI closely followed Figma designs and was correctly implemented across both iOS and Android platforms.
			</>,
			<>
				<b>Feature Implementation:</b> Developed and implemented critical features, including market requests and trade transactions, enhancing the app’s core functionality.
			</>,
			<>
				<b>Mobile App Deployment:</b> Developed, maintained, and deployed four mobile applications to the Google Play Store and Apple App Store, ensuring timely and successful launches.
			</>,
			<>
				<b>Web Application Deployment:</b> Developed, maintained, and deployed three React web applications, contributing to a consistent and reliable web experience for users.
			</>,
		],
	},
	{
		title: 'Lead Mobile Developer',
		company: 'Taply, Inc - (Toronto, Canada)',
		period: 'June 2020 - July 2022',
		description: 'Developed and Maintained a Mobile Application for a NO-CODE Platform running on React Native that’s used by more than 1,000 eCommerce businesses of all sizes and deployed it on Google Play Store and Apple App Store.',
		achievements: [
			<>
				<b>Mobile App Development & Maintenance:</b> Developed and maintained a React Native mobile application for a no-code platform, serving over 1,000 eCommerce businesses, and deployed it to Google Play Store and Apple App Store.
			</>,
			<>
				<b>App Deployment:</b> Published and deployed more than 300 mobile applications on the Google Play Store and Apple App Store.
			</>,
			<>
				<b>Feature Enhancement:</b> Added and improved key eCommerce features, significantly boosting customer sales.
			</>,
			<>
				<b>CI/CD Process:</b> Managed continuous integration and delivery (CI/CD) automation for iOS and Android deployments using Bitrise, Fastlane, and Puppeteer.
			</>,
			<>
				<b>Third-Party Integrations:</b> Integrated critical third-party services such as Facebook SDK, Google SDK, OneSignal, Shopify SDK API, and GraphQL for enhanced eCommerce functionality.
			</>,
			<>
				<b>UI/UX Adherence:</b> Ensured UI components adhered to Figma designs, maintaining consistency across both iOS and Android platforms.
			</>,
			<>
				<b>Testing & Code Quality:</b> Implemented E2E testing automation using Detox and Jest for React Native and conducted code reviews to ensure production-ready code.
			</>,
			<>
				<b>Customer Support & Feedback:</b> Improved tech customer service and implemented strategies based on ongoing customer feedback to enhance the user experience.
			</>,
			<>
				<b>Analytics & Notifications:</b> Integrated mobile analytics and push notifications, supporting over 147,000 end-users monthly.
			</>,
			<>
				<b>User Growth:</b> Implemented a smart app banner feature, boosting user growth by 23% month-over-month.
			</>,
			<>
				<b>Global Expansion:</b> Added multi-currency support to the mobile app to enable global use.
			</>,
			<>
				<b>Project Management:</b> Utilized Trello for project management, improving team productivity and collaboration.
			</>,
			<>
				<b>Leadership:</b> Led and mentored a junior developer, contributing to team skill development.
			</>,
		],
	},
	{
		title: 'Software Developer & Lead Developer',
		company: 'Trends and Technologies (Makati, Philippines)',
		period: 'May 2017 - Aug Sept 2020',
		description: "Developed Web, Mobile Applications and API that caters to the clients' requirements",
		achievements: [
			<>
				<b>Team Leadership:</b> Led a cross-functional team of 5 developers, consisting of 2 front-end developers, 2 backend developers, and 1 QA engineer, ensuring effective collaboration and timely delivery of projects.
			</>,
			<>
				<b>API Development & Integration:</b> Spearheaded the development and integration of REST APIs using Express and Node.js, ensuring robust and scalable backend services.
			</>,
			<>
				<b>Mobile Application Development:</b> Led the design and development of mobile applications, focusing on performance, user experience, and seamless functionality across platforms.
			</>,
			<>
				<b>Software Development with React & TypeScript:</b> Developed and maintained high-quality software solutions using React and TypeScript, improving code maintainability, scalability, and performance across web applications.
			</>,
			<>
				<b>Project Deployment:</b> Successfully deployed between 4-10 projects, ensuring smooth releases and minimal downtime, and overseeing the deployment pipeline to production across different environments.
			</>,
		],
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
