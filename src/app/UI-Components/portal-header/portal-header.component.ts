import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Option } from 'src/app/option.modal';
import { StyleManagerService } from 'src/app/shared-service/style-manager.service';
import { SelectionsComponent } from '../selections/selections.component';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.css', '../../../styles.css']
})


export class PortalHeaderComponent implements OnInit{
  @Output()  sidenavToggled = new EventEmitter<boolean>();
  


  menuStatus: boolean = false;
  options: Array<Option> ;
  selectedTheme: Option;
  private readonly stylesBasePath = `assets/themes/`;
  productsArray: any;
  filterFields: any[];

  
 
  search : String ="";
  isShowStatus: any;
  netStatusIcon: string = 'wifi';
  isDark: boolean=true;

  



  constructor(private readonly styleManager: StyleManagerService,
              
              private router: Router,
              public dialog: MatDialog) {
    this.options=JSON.parse('[{"backgroundColor":"#fff","buttonColor":"#ffc107","headingColor":"#673ab7","label":"DeepPurple&Amber","value":"deeppurple-amber"},{"backgroundColor":"#fff","buttonColor":"#ff4081","headingColor":"#3f51b5","label":"Indigo&Pink","value":"indigo-pink"},{"backgroundColor":"#303030","buttonColor":"#607d8b","headingColor":"#e91e63","label":"Pink&BlueGrey","value":"pink-bluegrey"},{"backgroundColor":"#303030","buttonColor":"#4caf50","headingColor":"#9c27b0","label":"Purple&Green","value":"purple-green"}]');

  }


  ngOnInit(): void {
    this.styleManager.setStyle(`${this.stylesBasePath}deeppurple-amber.css`);
    this.filterFields = [
      {
        key: "common",
        title: "main fields",
        group: [
              {
                key: "IndividualPerson",
                title: "INFORMATION",
                group : [
                  {
                    key: "firstName",
                    title: "First Name",
                    type: "text"
                  },
                  {
                    key: "lastName",
                    title: "Last Name",
                    type: "text"
                  },
                  {
                    key: "citizenshipCountry",
                    title: "Country",
                    type: "text"
                  }
                ]

              },
              {
                key: "legalPerson",
                title: "Legal Person",
                group: [
                  {
                    key: "brandName",
                    title: "Brand Name",
                    type: "text"
                  },
                  {
                    key: "fullName",
                    title: "Full Name",
                    type: "text"
                  },
                  {
                    key: "Phone",
                    title:"Phone",
                    type: "text"
                  },
                  {
                    key: "registrationCountry",
                    title: "Country",
                    type: "text"
                  }
                ]
              }
            ]

          }
        
    ];
   
  }

  
  toggleFullScreen(){
    if(!document.fullscreenElement){
      document.body.requestFullscreen();
    }else{
      document.exitFullscreen();
    }
  }

  


  themeChangeHandler(themeToSet: Option) {
    this.selectedTheme = themeToSet;
    console.log(themeToSet);
    this.styleManager.setStyle(`${this.stylesBasePath}${themeToSet.value}.css`);
  }

 
  toggleDarkTheme(): void {
    // this.darkModeService.toggle();
  }

  goToNavigationPortal(){
    this.router.navigate(['/app-navigation-portal'])
  }


  sideNaveToggle()  {
    this.menuStatus = !this.menuStatus;
    this.sidenavToggled.emit(this.menuStatus);
  }

  openDialog() {
    const dialogRef = this.dialog.open(SelectionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}