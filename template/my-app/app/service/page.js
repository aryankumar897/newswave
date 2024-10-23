"use client"

import React from 'react';
import './style.css'; // Assume CSS styles are written here

const services = [
  {
    title: 'Build a Full-Stack News Portal',
    description: 'Create a comprehensive news portal using Next.js, Node.js, Express, and MongoDB.',
    icon: '📰',
  },
  {
    title: 'Generative AI for Content Creation',
    description: 'Leverage AI to automatically generate engaging and accurate news content, ensuring timely updates and diverse perspectives.',
    icon: '🤖', // You can replace this with a proper AI-related icon
  },
  {
    title: 'Master Next.js & React',
    description: 'Gain expertise in Next.js and React to build dynamic, server-side rendered applications.',
    icon: '⚛️',
  },
  {
    title: 'Develop Robust Node.js APIs',
    description: 'Design and implement RESTful APIs using Node.js to integrate seamlessly with your portal.',
    icon: '💻',
  },
  {
    title: 'Authentication & Authorization with NextAuth',
    description: 'Secure your application with NextAuth and create login pages for users, editors, and admins.',
    icon: '🔒',
  },
  {
    title: 'Role-based Dashboards',
    description: 'Create dashboards tailored for admins, editors, and users with role-based access control.',
    icon: '📊',
  },
  {
    title: 'Real-Time Stock Prices',
    description: 'Fetch and display real-time stock prices using Rapid API.',
    icon: '📈',
  },
  {
    title: 'Premium Content with Stripe Payment',
    description: 'Implement a subscription-based model for premium content with Stripe for payments.',
    icon: '💳',
  },
  {
    title: 'Responsive Design',
    description: 'Ensure a seamless experience across all devices with responsive design.',
    icon: '📱',
  },
  {
    title: 'SEO Optimization',
    description: 'Optimize the portal for search engines to enhance visibility and attract more visitors.',
    icon: '🔍',
  },
  {
    title: 'Trending & Missed News Banners',
    description: 'Engage users with dynamic sections for trending and missed news.',
    icon: '🔥',
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Discover the full range of features that make our news portal exceptional.</p>
      </header>

      <div className="services-grid">
    
      </div>
    </div>
  );
};

export default ServicesPage;
