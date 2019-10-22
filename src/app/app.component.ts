import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'propertybinding2';

  option1 = {
      fruits : ["Apples", "Apricots", "Avocadosm" ,"Bananas", "Boysenberries", "Blueberries", "Bing Cherry"],
    limit : ["There", "should", "be", "no", "doubt", "that", "educating", "a", "woman", "serves", "a", "larger", "ameliorative", "purpose."],
      
  };
  option2 = {
    fruits : ["books", 'bureaus','dressers', 'wardrobes', 'cabinets', 'can openers', 'chairs', 'clothes dryers', 'coffee makers', 'computers'],
    limit : ["The", "recently", "released", "Health", "Ministry", "survey", "that", "showed", "a", "direct", "correlation", "between", "the", "nutritional"]
    
  }
  option3 = {
    fruits :  ["The", "only", "animal", "on", "this" ],
    limit : [ "status", "of", "children", "and", "their", "mothers’", "education", "is", "a", "further", "stroke", "for", "the", "case", "of", "women’s", "education."] 
  };
  option4 = {
    fruits : ["list", "that", "gets", "a", "mention", "for", "being", "pretty,", "the", "Guianan", ],
    limit : ["The", "Comprehensive", "National", "Nutrition", "Survey,", "which", "studied", "1.2", "lakh", "children", "between", "2016-18,"] 
  };
  option5 = {
    fruits: ["Cock-of-the-rock", "is", "notable", "for", "the", "male's", "bright", "orange", "plumage", "and", "dramatic", "half-moon", "shaped", "head", "crest,", "which"],
    limit : [ "measured", "diet", "diversity,", "meal", "frequency", "and", "minimum", "acceptable", "diet", "as", "the", "three", "core", "indicators", "of", "nutritional", "deficiency", "among"] 
  };
  option6 = {
    fruits : ["sometimes", "totally", "obscures", "its", "beak", "and", "lends", "it", "an", "odd", "appearance."],
    limit : ["infants", "and", "young", "children.", "It", "demonstrated", "that", "with", "higher", "levels", "of", "schooling", "for", "a", "mother,", "her", "children", "received", "better", "diets."]
  };
private list = this.option1;



 }