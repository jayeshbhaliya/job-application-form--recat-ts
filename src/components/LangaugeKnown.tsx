import React from "react";
import { ErrorMessage, Field } from "formik";

function LangaugeKnown() {
  return (
    <>
    <div className="form-header">Langauge Known</div>
      <hr />
     <div className='form-control'>
        <div id="hindi">Hindi</div>
        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="langaugeKnown.hindi" value="read" />
            Read
          </label>
          <label>
            <Field type="checkbox" name="langaugeKnown.hindi" value="write" />
            Write
          </label>
          <label>
            <Field type="checkbox" name="langaugeKnown.hindi" value="speake" />
            Speake
          </label>
          <ErrorMessage component="div" className="error-message" name="langaugeKnown.hindi" />
        </div>
      </div>
     <div className='form-control'>
        <div id="english">English</div>
        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="langaugeKnown.english" value="read" />
            Read
          </label>
          <label>
            <Field type="checkbox" name="langaugeKnown.english" value="write" />
            Write
          </label>
          <label>
            <Field
              type="checkbox"
              name="langaugeKnown.english"
              value="speake"
            />
            Speake
          </label>
          <ErrorMessage component="div" className="error-message" name="langaugeKnown.english" />
        </div>
      </div>
     <div className='form-control'>
        <div id="gujrati">Gujrati</div>
        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="langaugeKnown.gujrati" value="read" />
            Read
          </label>
          <label>
            <Field type="checkbox" name="langaugeKnown.gujrati" value="write" />
            Write
          </label>
          <label>
            <Field
              type="checkbox"
              name="langaugeKnown.gujrati"
              value="speake"
            />
            Speake
          </label>
          <ErrorMessage  name="langaugeKnown.gujrati" />
        </div>
      </div>
    </>
  );
}

export default LangaugeKnown;
