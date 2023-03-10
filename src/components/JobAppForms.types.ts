export type EducationalDetailsType = {
    nameOfBoard: string,
    passingYear: string,
    percentage: 0,
};

export type WorkExperienceType = {
    companyName: string,
    designation: string,
    from: string,
    to: string,
  };

  export type LangaugeKnownType = {
    hindi: string[],
    english: string[],
    gujrati: string[],
  };

  export type TechnologiesType = {
    PHP: string,
    MYSQL: string,
    LARAVEL: string,
    ORACLE: string,
  }

  export type ReferenceContactType = {
    name: string,
    contactNumber: string,
    relation: string,
  }

export type IntialStateType = {
    firstName: string,
    lastName: string,
    designation: string,
    address1: string,
    address2: string,
    email: string,
    city: string,
    phoneNumber: string,
    gender: string,
    zipCode: 0,
    relationshipStatus: string,
    dateOfBirth: string,
    educationDetails: EducationalDetailsType[],
    workExperience: WorkExperienceType[],
    langaugeKnown: LangaugeKnownType,
    technologies: TechnologiesType,
    referenceContact: ReferenceContactType[],
    preferedLocaton: string,
    noticePeriod: string,
    expectedCtc: 0,
    currentCtc: 0,
    department: string,
  };
