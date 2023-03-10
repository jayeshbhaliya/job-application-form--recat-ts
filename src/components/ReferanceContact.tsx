import { ErrorMessage, Field, FieldArray } from "formik";
import React from "react";
import { EducationalDetailsType } from "./JobAppForms.types";

function ReferanceContact() {
  return (
    <>
      <div className="form-header">Referance Contact</div>
      <hr />
      <div>
        <FieldArray name="referenceContact">
          {(fieldArrayProps) => {
            const { push, remove, form } = fieldArrayProps;
            const { values } = form;
            const { referenceContact } = values;
            return (
              <div>
                {referenceContact.map((eduDetail : EducationalDetailsType[], index : number) => (
                  <div key={index}>
                    <div className="form-control">
                      <label htmlFor="name">Name</label>
                      <Field
                        type="text"
                        name={`referenceContact[${index}].name`}
                      />
                      <ErrorMessage component="div" className="error-message"
                        name={`referenceContact[${index}].name`}
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="contactNumber">Contact Number</label>
                      <Field
                        type="text"
                        name={`referenceContact[${index}].contactNumber`}
                      />
                      <ErrorMessage component="div" className="error-message"
                        name={`referenceContact[${index}].contactNumber`}
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="relation">Relation</label>
                      <Field
                        type="text"
                        name={`referenceContact[${index}].relation`}
                      />
                      <ErrorMessage component="div" className="error-message"
                        name={`referenceContact[${index}].relation`}
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
                          name: "",
                          contactNumber: "",
                          relation: "",
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
    </>
  );
}

export default ReferanceContact;
