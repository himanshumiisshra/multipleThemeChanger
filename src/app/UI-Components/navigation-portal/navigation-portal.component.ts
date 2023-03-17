import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-portal',
  templateUrl: './navigation-portal.component.html',
  styleUrls: ['./navigation-portal.component.css']
})
export class NavigationPortalComponent {
  @Input() SideNavStatus: boolean = false;
  opened: boolean ;
  events: string[] = [];

  list = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'dashboard'
    },
    {
      number: '2',
      name: 'e-class',
      icon: 'book'
    },
    {
      number: '3',
      name: 'Regitration',
      icon: 'library_add_check'
    },
    {
      number: '4',
      name: 'Attendance',
      icon: 'touch_app'
    },
    {
      number: '5',
      name: 'Exam',
      icon: 'desktop_mac'
    },
    {
      number: '6',
      name: 'Assets',
      icon: 'laptop_mac'
    },
    {
      number: '7',
      name: 'Communication',
      icon: 'email'
    },
    {
      number: '8',
      name: 'Assignment',
      icon: 'assignment'
    },
    {
      number: '9',
      name: 'Media Sharing',
      icon: 'perm_media'
    },
    {
      number: '10',
      name: 'Admission',
      icon: 'spellcheck'
    }
  ]

}
