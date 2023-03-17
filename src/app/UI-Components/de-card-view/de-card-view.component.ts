import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { DeCardView } from './de-card-view_i.ts/de-card-view_i';
@Component({
  selector: 'app-de-card-view',
  templateUrl: './de-card-view.component.html',
  styleUrls: ['./de-card-view.component.css']
})
export class DeCardViewComponent implements OnInit {
  @Input() cardLayoutData:DeCardView;
  @Input() headTemplateRef:TemplateRef<any>
  @Input() contentTemplateREf:TemplateRef<any>

  @Output() onSelectMenu:EventEmitter<string>=new EventEmitter();
  @Output() onPressback:EventEmitter<boolean>=new EventEmitter();

  constructor() {}




  ngOnInit(): void {
      
  }

  onClickIcon(){
    this.onPressback.emit(true);
  }

  // openHelp(helpType){
  //   this.guideService.open(helpType);
  // }

  onSelectContextMenu(contextMenuType){
    if(contextMenuType){
      this.onSelectMenu.emit(contextMenuType);
    }
  }

}
