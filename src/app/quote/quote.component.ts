import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { doesNotReject } from 'assert';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote( 1, 'All our dreams can come true,if we have the courage to pursue them.',' — Walt disney',0,0,new Date(2012,8,2)),
  new Quote(2, 'Chase the vision,not the money,the money will end up following you.',' — Tony hsieh', 0,0,new Date(2014,7,10)),
  new Quote(3,'Some of the wonderful people are the ones who dont fit into boxes.','— Tori amos',0,0,new Date(2016,9,6)),
  new Quote(4,'If opportunity does not knock,build a doesNotReject.','— Milton berle',0,0,new Date(2019,2,5))
  
]

  first!: number;
  last!:number
  count!:number 

 highest(){
  this.first = 0
  this.last = 0

  for(this.count=0 ; this.count < this.quotes.length; this.count++) {
    this.last = this.quotes[this.count].upvote;
    if(this.last > this.first){this.first = this.last}
  }
  return  this.first
}


 deleteQuote(isComplete: any, index: number){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

  if (toDelete){
    this.quotes.splice(index,1)
  }
    
  }
}
addNewQuote(quote: Quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

getCurrentYear() {
  let timeline = new Date();
  return timeline.getFullYear();
}

constructor() { }


  ngOnInit(): void {
  }

}

