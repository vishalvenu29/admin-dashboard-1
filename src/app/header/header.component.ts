import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  // user defined event creation
  // @output for sharing from child to parent
  @Output() onmenubtnClick = new EventEmitter()

menubtnclicked(){
// to occur an userdefined event
this.onmenubtnClick.emit() 

// to resize screen
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    )
  }, 100);
}

}
