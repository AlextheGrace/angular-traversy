import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;


  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.users = [
        {
         firstName: "big",
         lastName: "man",
         age: 30,
         address: {
             street:"bigman torg 25",
             postCode:13240,
             city: ""
         }
         },
         {
           firstName: "john",
           lastName: "doe",
           age: 35,
           address: {
               street:"johns street",
               postCode:20343,
               city: "los angeles"
           }
         },
 
           {
             firstName: "alex",
             lastName: "grace",
             age: 26,
             address: {
                 street:"björknäs torg 25",
                 postCode:13240,
                 city: "Stockholm"
             }
           }
       ];
       this.loaded = true;
    },2000);
    

      this.showExtended = true;

      // this.addUser({
      //   firstName: "david",
      //   lastName: "grace",
      //   age: 26,
      //   address: {
      //       street:"elm street",
      //       postCode:12323,
      //       city: "new york"
      //   }
      // });
    }

    addUser(user: User) {

      this.users.push(user);
    }

}
