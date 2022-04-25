import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  data = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

  mapDataWithForEach(values: number[]): number[] {
    let result: number[] = [];
    values.forEach(value => {
      result.push(value * value);
    });

    return result;
  }

  mapDataWithMap(values: number[]): number[] {
    return values.map(value => value * value);
  }

  sumItAll = (values: number[]) => values.reduce((acc, next) => acc + next);
}
