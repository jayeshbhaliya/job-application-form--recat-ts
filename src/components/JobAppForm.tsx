import { Form, Formik } from "formik";
import { useState , useRef } from "react";
import * as Yup from "yup";
import BasicDetails from "./BasicDetails";
import EducationDetails from "./EducationDetails";
import { IntialStateType } from "./JobAppForms.types";
import LangaugeKnown from "./LangaugeKnown";
import Navbar from "./Navbar";
import Prerences from "./Prerences";
import ReferanceContact from "./ReferanceContact";
import TechnologesYouKnow from "./TechnologesYouKnow";
import WorkExperience from "./WorkExperience";

const FormSchema = [
Yup.object().shape({
  firstName: Yup.string().min(2).max(25).required("Required"),
  lastName: Yup.string().min(2).max(25).required("Required"),
  designation: Yup.string().min(3),
  address1: Yup.string().min(3),
  address2: Yup.string().min(3),
  city: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  phoneNumber: Yup.string()
    .min(9)
    .max(13)
    .matches(/^[0-9]+$/, "Enter a valid number")
    .required("Required"),
  gender: Yup.string().required("Required"),
  zipCode: Yup.string()
    .min(5, "Enter a valid  zip code")
    .max(6, "Enter a valid zip code")
    .matches(/^[0-9]+$/, "Enter a valid zip code")
    .required("Required"),
  relationshipStatus: Yup.string().required("Required"),
  dateOfBirth: Yup.date().required("Required"),
}),
Yup.object().shape({
  educationDetails: Yup.array().of(
    Yup.object().shape({
      nameOfBoard: Yup.string().required("Required"),
      passingYear: Yup.string()
        .min(4, "Enter a valid year")
        .max(4, "Enter a valid year")
        .matches(/^[0-9]+$/, "Enter a valid year")
        .required("Required"),
      percentage: Yup.string()
    .min(5, "Enter a valid  percentage")
    .max(6, "Enter a valid percentage")
    .matches(/^(?=.*\d)\d{0,2}(?:\.\d{0,2})?$/, "Enter a percentage")
    .required("Required"),
    })
  )
}),
Yup.object().shape({
  workExperience: Yup.array().of(
    Yup.object().shape({
      companyName: Yup.string().required("Required"),
      designation: Yup.string().required("Required"),
      from: Yup.date().required("Required"),
      to: Yup.date().required("Required"),
    })
  )
}),
Yup.object().shape({
}),
Yup.object().shape({
}),
Yup.object().shape({
  referenceContact: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required"),
      contactNumber: Yup.string()
        .min(10, "Enter a valid contact number.")
        .max(10, "Enter a valid contact number.")
        .matches(/^[0-9]+$/, "Enter a valid contact number.")
        .required("Required"),
      relation: Yup.string().required("Required"),
    })
  )
}),
Yup.object().shape({
  preferedLocaton: Yup.string().required("Required"),
  noticePeriod: Yup.number().required("required"),
  expectedCtc: Yup.number().min(0).max(10000000).required("required"),
  currentCtc: Yup.number().min(0).max(10000000).required("required"),
  department: Yup.string().required("Required"),
})

]


function JobAppForm() {
  const [current, setCurent] = useState(1);
  const [vadidatedPage,setValidatedPage]= useState(1)
  const [alldatavalid, setAlldatavalid] = useState("yes");
  const intialState : IntialStateType = {
    firstName: "",
    lastName: "",
    designation: "",
    address1: "",
    address2: "",
    email: "",
    city: "",
    phoneNumber: "",
    gender: "",
    zipCode: 0,
    relationshipStatus: "",
    dateOfBirth: new Date().toISOString().slice(0, 10),
    educationDetails: [
      {
        nameOfBoard: "",
        passingYear: "",
        percentage: 0,
      },
    ],
    workExperience: [
      {
        companyName: "",
        designation: "",
        from: new Date().toISOString().slice(0, 10),
        to: new Date().toISOString().slice(0, 10),
      },
    ],
    langaugeKnown: {
      hindi: [],
      english: [],
      gujrati: [],
    },
    technologies: {
      PHP: "",
      MYSQL: "",
      LARAVEL: "",
      ORACLE: "",
    },
    referenceContact: [
      {
        name: "",
        contactNumber: "",
        relation: "",
      },
    ],
    preferedLocaton: "",
    noticePeriod: "",
    expectedCtc: 0,
    currentCtc: 0,
    department: "",
  };
  const errorPage = (error : any) => {
    
    if (
      error.firstName ||
      error.lastName ||
      error.designation ||
      error.email ||
      error.phoneNumber ||
      error.address1 ||
      error.address2 ||
      error.city ||
      error.zipCode ||
      error.relationshipStatus ||
      error.phoneNumber ||
      error.gender ||
      error.dateOfBirth
    ) {
      setCurent(1);
    } else if (error.educationDetails) {
      setCurent(2);
    } else if (error.workExperience) {
      setCurent(3);
    } else if( alldatavalid === 'yes') {
      setCurent(1);
    }
    setAlldatavalid('no')
  };
  const formRef = useRef(null) as any;
  const handleSubmit = () => {
  if (formRef.current) {
    formRef.current.handleSubmit()
  }
}
  const navChange = (value : number) =>{
    if(value <= vadidatedPage) {
      setCurent(value);
    } else {
      handleSubmit()
    }
  }
  console.log(formRef.current);
  
  return (
    <>
      <Navbar current={current} navChange={navChange} />
      <div className="card">
        <Formik innerRef={formRef}
          initialValues={intialState}
          validationSchema={FormSchema[current-1]}
          onSubmit={(values) => {
            if(current === 7) {
              setValidatedPage(7)
               console.log(values);
               setCurent(1)
            } else {
              setCurent(current + 1)
              setValidatedPage(current);
            }
          }}
        >
          {(formik) => {
            //  console.log(formik);
            return (
              <div className="main-form">
                <Form>
                  {current === 1 && <BasicDetails  />}
                  {current === 2 && <EducationDetails  />}
                  {current === 3 && <WorkExperience  />}
                  {current === 4 && <LangaugeKnown  />}
                  {current === 5 && <TechnologesYouKnow  />}
                  {current === 6 && <ReferanceContact  />}
                  {current === 7 && <Prerences  />}
                  {!(current === 1) && (
                    <button
                      type="button"
                      onClick={() => setCurent(current - 1)}
                    >
                      Previous
                    </button>
                  )}
                 
                  {current === 7 ? (
                    <button type="submit">Submit</button>
                  ) : (
                    <button
                      type="submit"
                      onClick={() => {
                        
                        errorPage(formik.errors);
                      }}
                    >
                      Next
                    </button>
                  )}
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default JobAppForm;

