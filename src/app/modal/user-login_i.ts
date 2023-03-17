export interface UserData {
    isUserDataFound: string;
    failCount: string;
    authMsg: string;
    app_version: string;
    schoolsData: SchoolsData[];
    id: string;
    regId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    mobile: string;
    isAccountDisable: string;
    class_id: string;
    class_name: string;
    userBaseProfileType: string;
    userProfileId: string;
    userPhotoPath: string;
    userFirstName: string;
    userMiddleName: string;
    userLastName: string;
    userId: string;
    userSyear?: string;
}

export interface SchoolsData {
    syearsData: SyearsData[];
    studentsData: StudentsData[];
    privileges: Privilege[];
    id: string;
    longName: string;
    shortName: string;
    address: string;
    city: string;
    zipCode: string;
    attendanceConfigType: string;
}

export interface Privilege {
    userType: string;
    baseProfileType: string;
    profileId: string;
    profileTitle: string;
    menu: ModulesInfo[];
}

export interface ModulesInfo {
    featureDescription: string;
    id: string;
    title: string;
    canSee: string;
    canEdit: string;
    icon: string;
    featureData: FeatureData[];
    navStr: string
}
export interface FeatureData {
    id: string;
    title: string;
    type: string;
    canSee: string;
    canEdit: string;
}

export interface SyearsData {
    syear: string;
    longName: string;
    shortName: string;
    startDate: string;
    endDate: string;
    mpId: string;
    termData: TermData[];
}

export interface TermData {
    mpId: string;
    title: string;
    type: string;
    startDate: string;
    endDate: string;
}
export interface StudentsData {
    id: string;
    studentFirstName: string;
    studentLastName: string;
    mobile: string;
    email: string;
    classId: string;
    classShortName: string;
    relationshipId: string;
    relation: string;
}

export interface UserAccounts {
    userId: string;
    userFirstName: string;
    userMiddleName: string;
    userLastName: string;
    activeClassName?: string;
    birthdate?: string;
    userAffiliatedSchoolIds?: string;
    userMobile: string;
    userEmail: string;
    userCurrentSchoolId?: string;
    userName: string;
    userProfileId?: string;
    userProfileTitle?: string;
    userType?: string;
    userSyear?: string;
    motherName?: string;
    userBaseProfileType: string;
    userRegId?: string;
    userEnrollmentStartDate?: string;
    userEnrollmentEndDate?: string;
    candidateId?: string;
    photoUrl?: string | boolean;
    simsStudentId?: string;
    password?: string;
    address?: string;
    previousYrUserIds?: string
    isAccountDisable?: string
    kidsArr?: string
}