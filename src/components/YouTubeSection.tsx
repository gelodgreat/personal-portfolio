import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Youtube } from 'lucide-react';

export const YouTubeSection = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section className='py-20 bg-black' id='youtube'>
			<div className='container mx-auto px-4'>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} transition={{ duration: 0.6 }} className='text-center mb-16'>
					<Youtube className='w-12 h-12 mx-auto mb-4 text-emerald-400' />
					<h2 className='text-4xl font-bold text-white'>Introduction</h2>
					<p className='text-gray-400 mt-4'>Watch my personal introduction and learn more about my journey</p>
				</motion.div>
        <div ref={ref} className='max-w-4xl mx-auto'>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }} transition={{ duration: 0.5 }} className='relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg'>
            <iframe
              src='https://www.youtube.com/embed/48o90FirKo4?autoplay=1'
              title='Personal Introduction'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className='absolute top-0 left-0 w-full h-full border-0'
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} transition={{ duration: 0.5, delay: 0.2 }} className='mt-8 text-center'>
            <h3 className='text-2xl font-semibold text-white mb-2'>Personal Introduction</h3>
            <p className='text-gray-400'>Get to know me better and understand my passion for software development and technology.</p>
          </motion.div>
        </div>
			</div>
		</section>
	);
};
