import { ActiveConfig } from "../../state-mgmt/loginStore/login.store";

export interface ActiveClientObj{
    authState: string;
    mobileAppHash: string;
    url: string;
    activeUserId?: string;
    activeUserRegId?: string;
    activeUsername?: string;
    activeUserPassword?: string;
    activeUserMobile?: string;
    activeUserType?:string;
    clientId: string;
    schoolId?: string;
    userAccounts?:Array<object>;
    students?:Array<object>;
    candidate?:CandidateObj;
    clientLabel?:string;
    orgTitle?:string;
    isRegular?:string;
    isAdmissionFollow?:string;
    group_school_ids?:string;
    allUserAccounts?:object;
    appVersion?:string;
    generalConfig?:ActiveConfig;
    insyncUrl?:string;
    loginResponse?:any;
    timestamp?:any;
    userAgent?:any;
    activeUserName?:string;
}

export interface CandidateObj{
    username:string;
    password:string;
    candidateId:string;
}