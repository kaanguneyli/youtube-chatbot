import { useState } from 'react';

const Home = () => {
    const [forms, setForms] = useState([{ url: '' }]);

    const handleAddForm = () => {
      setForms([...forms, { url: '' }]);
    };
  
    const handleInputChange = (index, event) => {
      const newForms = forms.map((form, i) => {
        if (i === index) {
          return { ...form, [event.target.name]: event.target.value };
        }
        return form;
      });
      setForms(newForms);
    };
  
    return (
      <div>
        {forms.map((form, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              name="url"
              value={form.url}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Enter URL"
            />
          </div>
        ))}
        <button onClick={handleAddForm}>Add Another</button>
      </div>
    );
}

export default Home;
