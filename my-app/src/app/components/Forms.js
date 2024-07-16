'use client';

import React, { useState } from 'react';
import styles from '../styles/Forms.module.css';

const Forms = () => {
  const [links, setLinks] = useState(['']);

  const handleAddLink = () => {
    setLinks([...links, '']);
  };

  const handleChange = (index, event) => {
    const newLinks = links.map((link, i) => (i === index ? event.target.value : link));
    setLinks(newLinks);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/retrieve-transcripts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ links }),
    });
  };

  
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        {links.map((link, index) => (
          <div key={index} className={styles.linkInput}>
            <input
              type="url"
              placeholder="Enter YouTube link"
              value={link}
              onChange={(event) => handleChange(index, event)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddLink} className={styles.addButton}>
          Add Link
        </button>
        <button type="submit" className={styles.submitButton}>
          Submit Links
        </button>
      </form>
    </div>
  );
};

export default Forms;
