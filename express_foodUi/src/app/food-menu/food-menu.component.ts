import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from '../service/foodMenu.service';
import { FoodCategory } from '../modals/foodCategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit {

  totalFoodItems: FoodCategory[];
  addButtonFlag: boolean[][] = [];
  chevronClicked: boolean[] = [];
  addtoCartFlag: boolean = false;
  vegIconCLicked: boolean = false;


  constructor(private foodMenuServ: FoodMenuService,
              private route: Router) { }

  ngOnInit() {
    this.chevronClicked = []
    this.chevronClicked[0] = true;
    if(!this.foodMenuServ.isUserLoggedIn()){
      this.route.navigate(['/login']);
    }else{
      this.foodMenuServ.dataSource = [];
    this.foodMenuServ.getAllItems().subscribe((data) => {
      this.totalFoodItems = data;
      this.showData();  
    });
    }
    

  }

  showData() {
    for (let i = 0; i < this.totalFoodItems.length; i++) {
      this.chevronClicked.push(false);
      this.addButtonFlag[i] = [];
      for(let j = 0; j < this.totalFoodItems[i].items.length; j++){
        this.foodMenuServ.dataSource.push(this.totalFoodItems[i].items[j]);
        this.addButtonFlag[i][j] = false;
      }
      
    }
  }

  onClickAdd(parentIndex, index, foodItem){
    this.addButtonFlag[parentIndex][index] = true;
    this.foodMenuServ.dataSource.forEach(item=>{
      if(item.id === foodItem.id){
        item.quantity = 1;
      }      
    });
    this.addtoCartFlag = true;
  }

  onVegIconClick(event){
    if(event.target.checked){
      this.vegIconCLicked = true;
    }else if(!event.target.checked){
      this.vegIconCLicked = false;
    }
  }

  onClickChevron(index) {
    if(this.chevronClicked[index] === true){
      this.chevronClicked[index] = false;
    }
    else {
      this.chevronClicked[index] = true;
    }
  }
  

}
