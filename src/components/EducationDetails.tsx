import { ErrorMessage, Field, FieldArray } from "formik";
import React from "react";
import { EducationalDetailsType } from "./JobAppForms.types";

function EducationDetails() {
  return (
    <div>
      <FieldArray name="educationDetails">
        {(fieldArrayProps) => {
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { educationDetails } = values;
          return (
            <div>
              <div className="form-header">Education Details</div>
              <hr />
              {educationDetails.map((educationDetail: EducationalDetailsType[], index: number) => (
                <div key={index}>
                  <div className="form-control">
                    <label htmlFor="nameOfBoard">Name of board</label>
                    <Field
                      type="text"
                      name={`educationDetails[${index}].nameOfBoard`}
                    />
                    <ErrorMessage
                      component="div"
                      className="error-message"
                      name={`educationDetails[${index}].nameOfBoard`}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="passingYear">Passing Year</label>
                    <Field
                      type="text"
                      name={`educationDetails[${index}].passingYear`}
                    />
                    <ErrorMessage
                      component="div"
                      className="error-message"
                      name={`educationDetails[${index}].nameOfBoard`}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="percentage">Percentage</label>
                    <Field
                      type="text"
                      name={`educationDetails[${index}].percentage`}
                    />
                    <ErrorMessage
                      component="div"
                      className="error-message"
                      name={`educationDetails[${index}].percentage`}
                    />
                  </div>

                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      {" "}
                      -{" "}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() =>
                      push({
                        nameOfBoard: "",
                        passingYear: "",
                        percentage: 0,
                      })
                    }
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              ))}
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
}

export default EducationDetails;
