export interface schoolsVM{
    schools:Schools[]
    syears:Syears[]
    mps:Mps[]
}
export interface Schools{
    id:string;
    omaId:string;
    title:string;
    attendanceConfig:string;
}

export interface Syears{
    id:string;
    title:string;
    schoolId:string;
}
export interface Mps{
    id:string;
    title:string;
    schoolId:string;
    syear:string;
    type?:string;
    startDate:string;
    endDate:string;
}

export interface StudentsDropdown extends SelectionDropdown{
    classId?:string;
    schoolId?:string;
}
export interface SelectionDropdown{
    id:string;
    title:string;
}

export interface AccTypes{
    id:string;
    title:string;
}
