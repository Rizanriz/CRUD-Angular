import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allfruits: Fruit[] = [];

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.fruitService.getAll().subscribe((data) => {
      console.log("Data received from backend:", data);
      this.allfruits = data;
    });
  }

  delete(id: string) {
    console.log("Deleting fruit with id:", id);
    this.fruitService.delete(id).subscribe({
      next: (data) => {
        window.location.reload();
      },error(err) {
        console.log(err);
      }
    });
  }
}
