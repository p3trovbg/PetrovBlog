import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number ;
  @Input() totalPages!: number;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {
  
  }

  ngOnInit(): void {
    this.onPageChange(this.currentPage);
  }
  
  onPageChange(page: number): void {
    this.pageChanged.emit(page);
  }

  get isHasPrevious() {
    return this.currentPage > 1;
  }

  get isHasNext() {
    return this.currentPage < this.totalPages;
  }

  get next() {
    return this.currentPage + 1;
  }

  get previous() {
    return this.currentPage - 1;
  }
}
