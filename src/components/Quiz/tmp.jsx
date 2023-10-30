import React, { useState } from "react";
import axios from "axios";
import "./quiz.css";

export default function Quiz() {
  const [categories, setCategories] = useState([]);
  return (
    <div>
      <div className="container">
        <h3>Questionnaire</h3>
        <div className="category1">
          <h5>Catégorie 1: Lorem ipsum dolor</h5>
          <h6>
            Question 1: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit?
          </h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div1-question1"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Tout à fait d'accord
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div1-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              D'accord
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div1-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Neutre
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div1-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              En déssacord
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div1-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              En déssacord total
            </label>
          </div>
        </div>
        <hr />
        <div className="category2">
          <h5>Catégorie 2: Lorem ipsum dolor</h5>
          <h6>
            Question 1: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit?
          </h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div2-question1"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Tout à fait d'accord
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div2-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              D'accord
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div2-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Neutre
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div2-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              En déssacord
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div2-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              En déssacord total
            </label>
          </div>
        </div>
        <hr />

        <div className="category3">
          <h5>Catégorie 3: Lorem ipsum dolor</h5>
          <h6>
            Question 1: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit?
          </h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div3-question1"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Tout à fait d'accord
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div3-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              D'accord
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div3-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Neutre
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div3-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              En déssacord
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="div3-question1"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              En déssacord total
            </label>
          </div>
        </div>
        <div className="btn btn-primary my-5">Valider</div>
      </div>
    </div>
  );
}
