import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Send, Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: new Date()
      });
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>contact@example.com</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/yourusername</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/yourusername</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
              {status && (
                <p className={`text-center ${status.includes('Error') ? 'text-red-400' : 'text-emerald-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};