import { useState, useEffect } from "react";

export default function Diagnostic() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("http://localhost:8092/diagno");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <div>
      {di.map((category) => (
        <div key={category.id}>
          <h2>{category.categorie}</h2>
          <ul>
            {category.categorie.map((question) => (
              <li key={question.id}>{question.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
