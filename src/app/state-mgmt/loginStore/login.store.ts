import { PrivilegesVM } from "src/app/modal/loginVM_i";
import { ClassList, Menu } from "src/app/modal/login_i";
import { AccTypes, schoolsVM, StudentsDropdown } from "src/app/modal/schoolVM_i";
import { UserAccounts, UserData } from "src/app/modal/user-login_i";

export type LoginStore = {
    loggedIn: boolean,
    userData: UserData,
    schoolConfig?: schoolsVM,
    featureData?: PrivilegesVM[],
    generalConfig: ActiveConfig,
    studentsData: StudentsDropdown[],
    accountTypes: AccTypes[],
    menus: Menu[],
    controlPanel: { [key: string]: string },
    preloginConstraints: PreLoginConstraints,
    isShowSetting: boolean;
    filter: { [key: string]: string },
    userClassList: ClassList[],
    instituteInfo: object,
    publicAnnouncements: object[],
    events: object[],
    candidateInfo: object,
    loginLoader: boolean,
    appVersion: any[],
    admYears: any[],
    networkStatus: string,
    guestData: { guestVerifiedInfo: object, resultInfo: object, studentData: object },
    authUserData?:any,
    notifications?:any[],
    candidateAccounts?:any[]
}

export interface PreLoginConstraints {
    currentView: string;
    keepUserId: string;
    currentViewData: UserAccounts[]
}

export interface ActiveConfig {
    activeClassName?:string;
    activeClassId?: string;
    activeSchoolId?: string;
    activeSchoolTitle?: string;
    activeMpTitle?: string;
    activeSyear?: string;
    activeMp?: string;
    startDate?: string;
    endDate?: string;
    activeStudentId?: string;
    activeAccount?: string;
    activeProfileId?: string;
    adm_app_year?: string;
    activeUserRegId?:string;
    activeUserId?:string;
    usersName?:string;
    mobile?:string;
    email?:string;
    userPhoto?:string;
    userSign?:string;
    activeUsername: string;
}