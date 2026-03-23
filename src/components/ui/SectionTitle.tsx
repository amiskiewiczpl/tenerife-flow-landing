import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '', centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="mb-4">{title}</h2>
      {subtitle && <p className="text-muted max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;