import { Component } from '@angular/core';
@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent {
  public userInput: string;

  constructor() {
    this.userInput = "";
  }

  getResponse() {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '2dfe9f414amshcdbaa0ac8c31d2ap1e1030jsna82ef23f9f00',
        'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com'
      },
      body: `{"question":"${this.userInput}"}`
    };

    fetch('https://simple-chatgpt-api.p.rapidapi.com/ask', options)
      .then(response => response.json())
      .then(response => this.settextValue(response))
      .catch(err => console.error(err));
  }

 settextValue(response:Object) {

  // @ts-ignore
   console.log(response.answer)

   // @ts-ignore
   document.getElementById('output').textContent= response.answer

  }
}
