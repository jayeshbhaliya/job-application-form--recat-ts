import { Field } from "formik";
import React from "react";


function TechnologesYouKnow() {
  const langs  = ["PHP", "MYSQL", "LARAVEL", "ORACLE"];
  const frequency = ["No", "Beginer", "Mideator", "Expert"];
  return (
    <>
    <div className="form-header">Technology You Known</div>
      <hr />
      {langs.map((lang) => {
        return (
          <div key={lang}>
            <div id={lang}>{lang}</div>
            <div className="flex-radio" role="group" aria-labelledby={lang}>
              {frequency.map((frc) => (
                <label key={frc}>
                  <Field
                    type="radio"
                    name={`technologies.${lang}`}
                    value={frc}
                  />
                  {frc}
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TechnologesYouKnow;
