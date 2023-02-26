import { Component, OnInit } from '@angular/core';
import { GlobalComponent } from '../global-component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  urls = {
    github: GlobalComponent.gitHubUrl,
    linkedIn: GlobalComponent.linkedInUrl,
    stackOverFlow: GlobalComponent.stackOverFlowUrl,
  }
  constructor() { 

  }

  ngOnInit(): void {
  }

}
