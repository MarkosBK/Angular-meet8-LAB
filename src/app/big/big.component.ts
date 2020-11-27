import { Component, OnInit } from '@angular/core';
import { CardInfo } from '../CardInfo';

@Component({
  selector: 'app-big',
  templateUrl: './big.component.html',
  styleUrls: ['./big.component.scss']
})
export class BigComponent implements OnInit {
  bigs:CardInfo[] =[];
  SelectedCard:CardInfo;
  constructor() { }

  showChanges(name){
    this.SelectedCard=this.bigs.find(item=>item.Name==name)
  }

  ngOnInit(): void {
    this.bigs.push(
      new CardInfo("Машина",
        "Большие габариты имеет автомобиль "+
        "Caterpillar 797B. Это самая большая машина в мире "+
        "– она принадлежит к типу карьерных самосвалов. Длина "+
        "автомонстра равняется почти 15 метрам, при ширине 9,5 "+
        "метров и высоте около 8 метров. "+
        "Вес самосвала - рекордные 280 тонн. ",
        "../../assets/car.jpg"),

      new CardInfo("Самолет",
        "Ан-225 «Мрия» – самый большой и по размерам, "+
       "и по грузоподъемности самолет в мире за всю историю авиации ",
        "../../assets/airplane.jpg"),

      new CardInfo("Корабль",
        "Самый большой круизный лайнер в мире "+
        "под названием Harmony of the Seas («Гармония морей») "+
        "вышел в свое первое плавание, сообщает Associated Press. "+
        "Длина 16-палубного лайнера — 362 м (он на 50 м "+
        "длиннее, чем Эйфелева башня), ширина — 66 м, "+
        "а вес — 120 тыс.",
        "../../assets/ship.jpg")
    );
    this.SelectedCard = this.bigs[0];
  }

}
