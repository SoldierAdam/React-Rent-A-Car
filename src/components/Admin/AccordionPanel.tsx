import React, { useState } from 'react';
import './Admin.css';

interface AccordionPanelProps {
  title: string;
  content: string | JSX.Element;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-panel">
      <div className="accordion-header" onClick={togglePanel}>
        <div className="accordion-title">{title}</div>
        <div className={`accordion-icon ${isOpen ? 'open' : 'closed'}`}>&#43;</div>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionPanel;
