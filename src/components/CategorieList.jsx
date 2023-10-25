import { useState, useEffect } from "react";
import axios from "axios";

export default function CategorieList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8092/categories/list")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des catégories:", error)
      );
  }, []);

  return (
    <div className="diagnostic-container">
      {categories.map((category) => {
        const isValidProgression =
          !isNaN(category.progression) &&
          category.progression >= 0 &&
          category.progression <= 100;

        if (!isValidProgression) {
          console.error(
            `La progression de la catégorie ${category.libelle} n'est pas un nombre valide entre 0 et 100.`
          );
          return null;
        }

        return (
          <div key={category.id} className="category-container">
            <h2>{category.libelle}</h2>
            <ProgressBar percentage={category.progression} />
          </div>
        );
      })}
    </div>
  );
}
