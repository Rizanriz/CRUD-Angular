import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';
import { CreateFruit } from '../fruit';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private fruitService: FruitService, private router: Router) { }

  formData: CreateFruit = {
    name: '',
    quantity: 0,
    price: 0
  };

  create() {
    this.fruitService.create(this.formData).subscribe({
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
