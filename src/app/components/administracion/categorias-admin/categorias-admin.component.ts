import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorias-admin',
  templateUrl: './categorias-admin.component.html',
  styleUrls: ['./categorias-admin.component.css']
})
export class CategoriasAdminComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

}
