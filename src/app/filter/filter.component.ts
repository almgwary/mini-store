import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filters: string[] = [];
  @Output() onFilter =  new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  onClick(filter){
    this.onFilter.emit(filter)
  }

}
