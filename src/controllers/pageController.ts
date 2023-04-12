import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { pet } from "../models/pet";

export const home = (req:Request, res:Response) => {
   res.render('pages/page', {
      menu : createMenuObject('all'),
      banner:{
         title: 'Todos os animais',
         background: 'allanimals.jpg'
      },
      data : pet.getAll 
   });    
}

export const dogs = (req:Request, res:Response) => {
   res.render('pages/page', {
      menu : createMenuObject('dog'),
      banner:{
         title: 'Cães',
         background: 'banner_dog.jpg'
      },
      data : pet.getFromType('dog') 
   });    
}

export const cats = (req:Request, res:Response) => {
   res.render('pages/page', {
      menu : createMenuObject('cat'),
      banner:{
         title: 'Gatos',
         background: 'banner_cat.jpg'
      },
      data : pet.getFromType('cat') 
   });    
}
      
export const fishes = (req:Request, res:Response) => {
   res.render('pages/page', {
      menu : createMenuObject('fish'),
      banner:{
         title: 'Peixes',
         background: 'banner_fish.jpg'
      },
      data : pet.getFromType('fish') 
   });    
}
    