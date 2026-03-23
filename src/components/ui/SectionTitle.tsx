import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;