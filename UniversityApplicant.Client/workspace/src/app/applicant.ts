export class Applicant {
    public Id: string;
    public Fname: string;
    public Lname: string;
    public Email: string;
    public BirthDate: Date;
    public Age: number;
    public Country: string;
    public City: string
    public Address: string;
    public Gender: eGenderType;
    public PhoneNo: string;
    public MaritalStatus: eMaritalStatus;
    public SchoolName: string;
    public GraduationYear: number;
    public Grade: eGrade;
    public ApplicantResume: string;
}

export enum eGenderType {
    Male = 1,
    Female = 2
}

export enum eMaritalStatus {
    Single = 1,
    Married = 2,
    Divorced = 3,
    Widowed = 4
}

export enum eGrade {
    Fair = 0,
    Good = 1,
    VeryGood = 3,
    Excellent = 4
}
