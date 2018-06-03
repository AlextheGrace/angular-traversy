import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean =  true;
  currentClasses = {};
  currentStyles = {};

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
             },
             registered: new Date('01/02/2018 08:30:00')
         },
         {
           firstName: "john",
           lastName: "doe",
           age: 35,
           address: {
               street:"johns street",
               postCode:20343,
               city: "los angeles"
               },
               registered: new Date('04/04/2018 12:30:00')
         },
 
           {
             firstName: "alex",
             lastName: "grace",
             age: 26,
             address: {
                 street:"björknäs torg 25",
                 postCode:13240,
                 city: "Stockholm"
                 },
                 registered: new Date('09/10/2013 15:30:00')
           }
       ];
       this.loaded = true;
       this.enableAdd = true;


       
    },2000);

      


      

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

      this.setCurrentClasses();
    }

    addUser(user: User) {

      this.users.push(user);
    }

    fireEvent(e) {
      console.log(e);
    }

    setCurrentClasses() {
      this.currentClasses = {
        'btn-success': this.enableAdd
      }
    }

    setCurrentStyles() {
      this.currentStyles = {
        'padding-top': this.showExtended ? '0' : '40px'
      }
    }

}
