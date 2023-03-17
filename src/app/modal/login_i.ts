export interface Menu {
    id?: string;
    title?: string;
    navStr?: string;
    icon?: string;
    subMenu? : Menu[];
    referenceId?:string;
}

export interface ClassList {
    schoolId: string;
    schoolShortName: string;
    schoolAddress?: any;
    schoolCity?: any;
    schoolState?: any;
    classId: string;
    className: string;
    short_name: string;
    isActive: string;
    id: string;
}