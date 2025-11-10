
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-neutral-200">
    {children}
  </h2>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This is a mock submission handler. In a real app, you'd send this to a backend.
    setStatus('Sending...');
    setTimeout(() => {
      setStatus(`Thank you, ${formData.name}! Your message has been received.`);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <AnimatedSection id="contact">
      <SectionTitle>Get in Touch</SectionTitle>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-neutral-200">Let's Connect</h3>
          <p className="text-lg text-neutral-400 mb-6">
            I'm currently open to new opportunities and collaborations. Feel free to reach out via the form or through my social channels.
          </p>
          <div className="flex space-x-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-green-400">
              <Github size={32} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-green-400">
              <Linkedin size={32} />
            </a>
            <a href={SOCIAL_LINKS.email} className="text-neutral-400 hover:text-green-400">
              <Mail size={32} />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
          <div>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          </div>
          <button type="submit" className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-colors">
            Send Message
          </button>
          {status && <p className="text-center mt-4 text-green-400">{status}</p>}
        </form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
