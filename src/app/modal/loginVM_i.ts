export interface PrivilegesVM{
    prvId:string;
    prvLabel:string;
    prvUniqStr:string;
    prvModuleId:string;
    prvDescription?:string;
    prvModuleLabel:string;
    prvModuleIcon?:string;
    prvFeatureType?:string;
    prvModuleUniqStr?:string;
    subMenus?:PrivilegesVM[];
    prvModuleHelpIcon?:string;
    sort_order?:string;
   
}