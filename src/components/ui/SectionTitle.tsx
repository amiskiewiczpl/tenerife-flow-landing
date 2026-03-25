import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '', centered = true }) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;