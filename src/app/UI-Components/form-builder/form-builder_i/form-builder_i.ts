
export interface Instruction{
    heading?:string;
    instArr?:string[]; 
    instrClass?:string;
}

export interface Guides{
    instrAbove?:Instruction;
    instrBelow?:Instruction;
}

export interface OptionsValuesArr{
    optionsId?:string;
    optionsLabel?:string;
    optionsValue?:any;
    optionsName?:string;
    optionsGroup?:string;
    optionsObj?:object;
    optionsHTML?:string;
    isDisabled?:boolean;
}

export interface CustomValidators{
    max_length?:number;
    min_length?:number;
    length?:number;
    required?:boolean;
    disabled?:boolean;
    pattern?:string;
    matchWith?:string;
    username?:boolean;
    autocomplete?: boolean;
    minDate?:string;
    maxDate?:string;
}

export interface ValidationMsg{
    errMsg?:string[];
    helpMsg?:string[];
}

export interface LayoutConfig{
    isShowWizard?:boolean;
    fieldStatus?:string;
    isShowFieldset?:boolean;
}

/**
 * 
 */
export interface FormBuilderVM{
    [x: string]: any;
    id?:string; //id and reactive form control name assigned to field 
    sortorder?:string; // sortorder for the fields. it should be from 'a' to 'z'. eg, aa,ab,ac.... az,ba,bb,....bz etc.
    prefixIcon?:string; // prefix icon name for the field. refer material icons.  https://material.io/resources/icons/
    name?:string; // identical to id
    type?:string; // type of the field - refer html form types 
                // Some extra custom form types 
                /*    1. object : this will create field set or stepper based on the layoutConfig
                                - this contains one or more fields in it.
                */
    layoutConfig?:LayoutConfig; // not used - it will be used for showing different views like steppers, fieldset, group of fields etc
    layoutClass?:LayoutClass; // its grid for the fields 
                        /* for eg.
                            {
                                xl:4,
                                lg:3,
                                md:2,
                                sm:1,
                                xs:1
                            }
                        
                        */
    label?:string; // floating label for the field
    altLabel?:string; // alternative for label - when field is active altLabel will float to the top of the field
    guides?:Guides; // Instructions to the form fields above and below
    placeholder?:string; // not used - like label
    
    remoteCheck?:object; // not used
    isShowField?:boolean; // it will decides whether to show or not 
    customValidators?:CustomValidators; // validations to the fields. Not for object type
                        /*
                        eg {
                                max_length?:number //maximum length of characters to be entered
                                min_length?:number //minimum length of characters to be entered;
                                length?:number //fixed length of characters;
                                required?:boolean //compulsory field;
                                disabled?:boolean //disabled field. not for edit;
                                pattern?:string //it allows regular expression. predefoned regular expression: 'mobile', 'email'
                                username?: boolean //it allows only character
                                minDate?:string; // min date for field type date. user cannot able to select date before this 
                                maxDate?:string; // man date for field type date. user cannot able to select date after this
                            }
                        
                        */
    validationMsg?:ValidationMsg; //No use
    uniqRecord?:Array<string>; // only in the case of type='array'. this is the uniq index of record to be added.
    referenceTo?:string; // no use
    toggleFields?:string[]; // no use
    toggleFieldsOnValue?:string; // no use
    optionsValuesArr?:OptionsValuesArr[] // options to be shown in dropdown, radio, checkbox etc

    url?:string; // path of the api from where data is to be received
    readUrlFrom?:string; // type of the api like 'api', 'jsonFile' --- for now we are using jsonFile only
    
    keynameToFetchDataFromResponse?:string; // when readUrlFrom='api', this will be the key from which we are reading data.
    fetchKeysFromResponse?:OptionsValuesArr; // this will be the mapping of data received from api to the options value arr
    replecate?:object; // this will create checkbox for copy fields data and enter to another identical fields.
                /* for example
                {
                    fromKey: toKey,
                    temporaryAddress:permanentAddress
                }
                */
    instMsg?:string; // Showing instructions related to field
    errMsg?:string; // no use
    optionsClass?:string; // no use
    
    jsonParamLookUpKeyValueInSession?:string[]; //no use
    sessionStorageKey?:string; //no use
    sessionStorageValue?:string; // no use
    
    schema?:FormBuilderVM[]; // array of different fields if its type is object
    prefilled?:string; // no use
    emitOnChange?:boolean; // field will emit values if changes detect in the field
    resetTo?:string; // no use string | string[]
    resetFieldOn?:string; // no use
    isMultipleSection?:boolean; // in case of select - it allows multiple selections
    optionsConfig?:object; // no use
    buttonIcon?:string; // no use
    returnKey?:string; // no use
}

export interface LayoutClass{
    xl?:number;
    md?:number;
    lg?:number;
    sm?:number;
    xs?:number;
}

export interface ActiveWizStep{
    selfId:string;
    parentId:string;
}

export interface UpdFormBuilderVM{
    parentKey:string;
    affectKey:string;
    formSchemaData:any;
}

export interface AutofillVM{
    storeKey?:string;
    autofillData:object;
}

export interface CheckboxListItems extends OptionsValuesArr{
    id:string,
    selected:boolean
}

export interface ActionData{
    actionType:string,
    actionData:any,
    valid:boolean,
    invalid:boolean,
    dirty:boolean,
    pristine:boolean,
    touched:boolean,
    untouched:boolean
}