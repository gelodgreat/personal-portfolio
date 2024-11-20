import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export const Hero = () => {
	return (
		<section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white'>
			<div className='container mx-auto px-4'>
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center'>
					<Terminal className='w-16 h-16 mx-auto mb-6 text-emerald-400' />
					<h1 className='text-5xl md:text-7xl font-bold mb-6'>
						Christian <span className='text-emerald-400'>Angelo Umali</span>
					</h1>
					<p className='text-xl md:text-2xl text-gray-300 mb-8'>Lead Developer | Mobile Applications | React | React Native | Software Developer</p>
					<div className='flex justify-center space-x-6'>
						<a href='https://github.com/gelodgreat' className='hover:text-emerald-400 transition-colors'>
							<Github className='w-8 h-8' />
						</a>
						<a href='https://www.linkedin.com/in/christianangelo/' className='hover:text-emerald-400 transition-colors'>
							<Linkedin className='w-8 h-8' />
						</a>
						<a href='mailto:christianangeloumaliofficial@gmail.com' className='hover:text-emerald-400 transition-colors'>
							<Mail className='w-8 h-8' />
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
