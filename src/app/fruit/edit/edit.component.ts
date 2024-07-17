import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formData: Fruit = {
    id: '',
    name: '',
    quantity: 0,
    price: 0
  }

  constructor(
    private fruitServices: FruitService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id) {
        this.getById(id);
        console.log(id);
      }
    });
  }

  getById(id: string) {
    this.fruitServices.edit(id).subscribe({
      next: (data) => {
        this.formData = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Error fetching fruit:', err);
      }
    });
  }

  update() {
    this.fruitServices.update(this.formData).subscribe({
      next: (data) => {
        this.router.navigate(['/fruit/home']);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}