import { Component, OnInit } from '@angular/core';
import { WeatherService} from './services/weather.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
weather:any
  constructor( private weatherService: WeatherService){

  }
ngOnInit(): void {
    
}
getWeather(cityName:string, countryCode:string){
  this.weatherService.getWeather(cityName,countryCode)
    .subscribe(
      res => {
        console.log(res);
        this.weather=res},
      err => console.log(err)
    )

}


  submitLocation(cityName:HTMLInputElement,countryCode:HTMLInputElement){
    if(cityName.value && countryCode.value){

      this.getWeather(cityName.value, countryCode.value)
  
      cityName.value="";
      countryCode.value="";
    }else{
      alert("Por favor, inserte algún valor")
    }
    cityName.focus();

    return false;
  }
}
