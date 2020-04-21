import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

}
