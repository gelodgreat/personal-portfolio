import React from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { YouTubeSection } from './components/YouTubeSection';

function App() {
	return (
		<main className='bg-black'>
			<Hero />
			<YouTubeSection />
			<Experience />
			<Education />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}

export default App;
