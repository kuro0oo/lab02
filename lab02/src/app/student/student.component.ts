import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student = [
    {ID:1,FirstName:"Carson",LastName:"Alexander",EnrollDate:  "2005-09-01"},          
    {ID:2,FirstName:"Meredith",LastName:"Alonso",EnrollDate:  "2002-09-01"},         
    {ID:3,FirstName:"Arturo",LastName:"Anand",EnrollDate:  "2003-09-01"},           
    {ID:4,FirstName:"Gytis",LastName:"Barzdukas",EnrollDate:"2002-09-01"},          
    {ID:5,FirstName:"Yan",LastName:"Li",EnrollDate:"2002-09-01"},      
    {ID:6,FirstName:"Peggy",LastName:"Justice",EnrollDate:"2001-09-01"},  
    {ID:7,FirstName:"Laura",LastName:"Norman",EnrollDate:"2003-09-01"},    
    {ID:8,FirstName:"Nino",LastName:"Olivetto",EnrollDate:"2005-09-01"}
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
