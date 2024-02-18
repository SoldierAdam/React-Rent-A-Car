// AccordionPanel.tsx

import React, { useState } from 'react';
import './AccordionPanel.css';

interface AccordionPanelProps {
  title: string;
  contents: string[];
  onClick: (content: string) => void;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({ title, contents, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleContentClick = (content: string) => {
    onClick(content);
  };

  return (
    <div className={`accordion-panel ${isOpen ? 'active' : ''}`}>
      <div className={`accordion-header ${isOpen ? 'active' : ''}`} onClick={togglePanel}>
        <h3>{title}</h3>
      </div>
      <div className={`accordion-content ${isOpen ? 'active' : ''}`}>
        {contents.map((content, index) => (
          <button className='btn btn-warning  btn-sm border' key={index} onClick={() => handleContentClick(content)}>{content}</button>
        ))}
      </div>
    </div>
  );
}

export default AccordionPanel;
