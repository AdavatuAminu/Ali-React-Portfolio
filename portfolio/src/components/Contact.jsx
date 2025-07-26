import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., API call)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="w-full min-h-screen bg-inherit flex flex-col items-center justify-center text-center text-inherit p-6">
            <h1 className="text-5xl font-bold mb-4">Let's [work] together</h1>
            <p className="text-lg mb-8">Open to full time, remote jobs or freelance projects.</p>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 mb-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 mb-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="w-full p-3 mb-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                ></textarea>
                <div className="flex justify-center mb-4">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin-icon.png" alt="LinkedIn" className="w-8 h-8 mr-2" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter-icon.png" alt="Twitter" className="w-8 h-8 mr-2" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram-icon.png" alt="Instagram" className="w-8 h-8" />
                    </a>
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}