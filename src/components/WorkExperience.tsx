import React from "react";
import { ErrorMessage, Field, FieldArray } from "formik";
import { WorkExperienceType } from "./JobAppForms.types";

function WorkExperience() {
  return (
    <div>
      <div className="form-header">Work Experience</div>
      <hr />
      <FieldArray name="workExperience">
        {(fieldArrayProps) => {
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { workExperience } = values;
          return (
            <div>
              {workExperience.map((workEx : WorkExperienceType, index : number) => (
                <div key={index}>
                  <div className="form-control">
                    <label htmlFor="companyName">Company Name</label>
                    <Field
                      type="text"
                      name={`workExperience[${index}].companyName`}
                    />
                    <ErrorMessage component="div" className="error-message"
                      name={`workExperience[${index}].companyName`}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="designation">Designation</label>
                    <Field
                      type="text"
                      name={`workExperience[${index}].designation`}
                    />
                    <ErrorMessage component="div" className="error-message"
                      name={`workExperience[${index}].designation`}
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="from">From</label>
                    <Field
                      type="date"
                      name={`workExperience[${index}].from`}
                    />
                    <ErrorMessage component="div" className="error-message"
                      name={`workExperience[${index}].from`}
                    />
                  </div>
                  <div>
                    <label htmlFor="to">To</label>
                    <Field
                      type="date"
                      name={`workExperience[${index}].to`}
                    />
                    <ErrorMessage component="div" className="error-message"
                      name={`workExperience[${index}].to`}
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
                        companyName:"",
                        designation:"",
                        from: new Date().toISOString().slice(0, 10),
                        to: new Date().toISOString().slice(0, 10),
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

export default WorkExperience;
