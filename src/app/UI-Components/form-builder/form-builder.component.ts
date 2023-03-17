import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutofillVM, FormBuilderVM, Guides } from './form-builder_i/form-builder_i';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  loader: boolean = false;
  filterForm: FormGroup;
  filterFields: any[];
  focusedField: string;
  instructionsData: Guides;
  formDataObj: FormGroup = new FormGroup({});
  activeFormSchemaData: FormBuilderVM[];
  expObj = {
    expMsg: new Array(),
    expHeader: ''
  }
  showModal: boolean = false;



  @Input() formSchema: FormBuilderVM;  //// GET ACTUAL ACTIVE FORM SCHEMA //NEED
  @Input() formData: AutofillVM = { autofillData: {} }; //NEED
  @Input() stringifiedForm: string;
  @Input() resetForm:boolean=true; //NEED

  
  constructor(private fb: FormBuilder,
    private fbService: FormBuilderVM) {}


  ngOnInit(){
    
  }

  getLayoutGrid(eachElm: FormBuilderVM, view) {
    if (eachElm.layoutClass) {
      return eachElm.layoutClass[view] ? eachElm.layoutClass[view] : 1
    } else {
      return 1
    }
  }

  applyReg(event, eachElm: FormBuilderVM) {
    if (eachElm.hasOwnProperty('customValidators')) {
      let customValidators = eachElm.customValidators;
      for (let eachValidator in customValidators) {
        switch (eachValidator) {
          case "max_length":
            if (this.formDataObj.controls[eachElm.id].value !== null) {
              if (this.formDataObj.controls[eachElm.id].value.length > customValidators[eachValidator] - 1) {
                event.preventDefault();
              }
            }
        }
      }

      if (eachElm.customValidators.hasOwnProperty('pattern')) {
        const avoidType = eachElm.customValidators.pattern;
        let inputVal = String.fromCharCode(event.charCode);
        let pattern;
        let asciiCode = inputVal.charCodeAt(0);
        switch (avoidType) {
          case "onlyChar":
            // pattern = /[-'a-zA-Z]/;
            // if (!pattern.test(inputVal)) {
            //   event.preventDefault();
            // }

            if ((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)) {
              //DO Nothing
            } else {
              event.preventDefault();
            }
            break

          case "mobile":
            pattern = /^[0-9]{1,10}/;
            if (this.formDataObj.controls[eachElm.id].value !== null) {
              if (this.formDataObj.controls[eachElm.id].value.length > 9) {
                console.log("mobileNoValidation")
                event.preventDefault();
              }
            }

            break

          case "fullname":
            pattern = /^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/;
            if (!pattern.test(inputVal)) {
              event.preventDefault();
            }
            break;

          case "noSpace":
            pattern = /[\s]/;
            if (pattern.test(inputVal)) {
              event.preventDefault();
            }
            break;
        }
      }
    }
  }

  manipulateFieldValue(elmObject: FormBuilderVM) {

    if (elmObject.remoteCheck !== undefined && this.formDataObj.controls[elmObject.id].valid && this.formDataObj.controls[elmObject.id].value !== null && this.formDataObj.controls[elmObject.id].value !== "") {
      this.loader = true;
      let params = {};
      params[elmObject.id] = this.formDataObj.controls[elmObject.id].value
      this.fbService['checkFieldSatus'](elmObject.remoteCheck['url'], params).subscribe(responseData => {
        if (responseData.collection.response.statusMsg === "SUCCESS") {
          this.throwException("Failed", [elmObject.label + " already exist. Please choose different " + elmObject.label]);
          this.formDataObj.controls[elmObject.id].reset();
          this.loader = false;
        } else {
          this.loader = false;
        }
      })
    }
  }


  throwException(expHeader, expMsgs) {
    this.expObj.expMsg = expMsgs;
    this.expObj.expHeader = expHeader;
    this.showModal = true
  }


}
