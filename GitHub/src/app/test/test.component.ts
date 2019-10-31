// import {Component, OnInit} from '@angular/core';
// import {DatabaseService} from '../database.service';
// import {ReposService} from '../repos.service';
//
// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.css']
// })
// export class TestComponent implements OnInit {
//
//   constructor(
//     private db: DatabaseService,
//     private github: ReposService
//   ) {
//   }
//
//   ngOnInit() {
//     this.github.getAllRepo().subscribe(
//       (data: Array<any>) => {
//         const len = data.length;
//         for (let i = 0; i < len; i++) {
//           const obj = data[i];
//           console.log(obj.id, obj.name);
//           this.db.save(obj.id, obj.name).subscribe(
//             response => {
//               console.log(response);
//             }
//           );
//         }
//       }
//     );
//   }
//
// }
