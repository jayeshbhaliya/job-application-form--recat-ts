import React from "react";
import { ErrorMessage, Field } from "formik";

function Prerences() {
  const departments : string[] = [
    "Software",
    "Design",
    "Hr",
    "Marketing",
    "Business Analytics",
  ];
  return (
    <>
    <div className="form-header">Preferances</div>
      <hr />
     <div className='form-control'>
        <label htmlFor="preferedLocaton">Prefered Locaton</label>
        <Field type="text" name="preferedLocaton" />
        <ErrorMessage component="div" className="error-message" name="preferedLocaton"  />
      </div>
     <div className='form-control'>
        <label htmlFor="noticePeriod">Notice Period (Days)</label>
        <Field type="number" name="noticePeriod" />
        <ErrorMessage component="div" className="error-message" name="noticePeriod"  />
      </div>
     <div className='form-control'>
        <label htmlFor="expectedCtc">Expected CTC</label>
        <Field type="number" name="expectedCtc" />
        <ErrorMessage component="div" className="error-message" name="expectedCtc"  />
      </div>
     <div className='form-control'>
        <label htmlFor="currentCtc">Current CTC</label>
        <Field type="number" name="currentCtc" />
        <ErrorMessage component="div" className="error-message" name="currentCtc"  />
      </div>
     <div className='form-control'>
        <Field as="select" name="department">
          {departments.map((name) => {
            return <option key={name} value={name}>{name}</option>;
          })}
        </Field>
        <ErrorMessage component="div" className="error-message" name="department"  />
      </div>
    </>
  );
}

export default Prerences;
