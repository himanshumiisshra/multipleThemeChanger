import { Component } from '@angular/core';
import { DeCardView } from 'src/app/UI-Components/de-card-view/de-card-view_i.ts/de-card-view_i';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  overallAttCard: DeCardView= {
    cvHeader: {
      cvHeading: "heading 1",
      cvContextMenus: [
        {
          contextMenuLabel: "label 1",
          contextMenuIcon: "heads",
          contextMenuType: "planning"
          
        }
      ]
    },
    cvFooter:{
      cvActions: [
        {
          actionIcon: "dance"
        }
      ]
    }
   
  }

}
