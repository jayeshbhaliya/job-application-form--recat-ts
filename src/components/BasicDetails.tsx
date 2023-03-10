import React from "react";
import { ErrorMessage, Field } from "formik";

function BasicDetails() {
  return (
    <>
      <div className="form-header">Basic Details</div>
      <hr />
      <div className="form-control">
        <label htmlFor="firstName">First Name</label>
        <Field type="text" name="firstName" placeholder="firstName" />
        <ErrorMessage component="div" className="error-message" name="firstName" />
      </div>

      <div className="form-control">
        <label htmlFor="lastName">Last Name</label>
        <Field type="text" name="lastName" placeholder="lastName" />
        <ErrorMessage component="div" className="error-message" name="lastName" />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <Field type="text" name="email" placeholder="email" />
        <ErrorMessage component="div" className="error-message" name="email" />
      </div>
      <div className="form-control">
        <label htmlFor="designation">Designation</label>
        <Field type="text" name="designation" placeholder="designation" />
        <ErrorMessage component="div" className="error-message" name="designation" />
      </div>
      <div className="form-control">
        <label htmlFor="address1">Address 1</label>
        <Field type="text" name="address1" placeholder="address1" />
        <ErrorMessage component="div" className="error-message" name="address1" />
      </div>
      <div className="form-control">
        <label htmlFor="address2">Address 2</label>
        <Field type="text" name="address2" placeholder="address2" />
        <ErrorMessage component="div" className="error-message" name="address2" />
      </div>
      <div className="form-control">
        <label htmlFor="city">City</label>
        <Field type="text" name="city" placeholder="city" />
        <ErrorMessage component="div" className="error-message" name="city" />
      </div>
      <div className="form-control">
        <label htmlFor="phoneNumber">Phone number</label>
        <Field type="text" name="phoneNumber" placeholder="phoneNumber" />
        <ErrorMessage component="div" className="error-message" name="phoneNumber" />
      </div>
      <div className="form-control">
        <label htmlFor="zipCode">Zipcode</label>
        <Field type="text" name="zipCode" placeholder="zipCode" />
        <ErrorMessage component="div" className="error-message" name="zipCode" />
      </div>

      {/* <div className="form-control">
        <label htmlFor="gender">Gender</label>
        <Field as="select" name="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </Field>
        <ErrorMessage component="div" className="error-message" name="gender"  />
      </div> */}
      <div className="form-control">
        <div id="gender">Gender</div>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field type="radio" name="gender" value="Male" />
            Male
          </label>
          <label>
            <Field type="radio" name="gender" value="Female" />
            Female
          </label>
          <ErrorMessage component="div" className="error-message" name="gender" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="relationshipStatus">RelationShip Status</label>
        <Field as="select" name="relationshipStatus">
          <option value="single">Single</option>
          <option value="marride">Married</option>
        </Field>
        <ErrorMessage component="div" className="error-message" name="relationshipStatus" />
      </div>
      <div className="form-control">
        <label htmlFor="dateOfBirth">Date Of Birth</label>
        <Field type="date" name="dateOfBirth" placeholder="dateOfBirth" />
        <ErrorMessage component="div" className="error-message" name="dateOfBirth" />
      </div>
    </>
  );
}

export default BasicDetails;
