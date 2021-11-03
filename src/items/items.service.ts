import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable() //The @Injectable decorator allows us to inject our service into another class in
// another file. 

export class ItemsService {

    
    private readonly items: Item[] = [

        {
            quantity: 78,
            name: 'John',
            id: '1294',
            description: 'this is item one', 
        } 
        ,

        {
            quantity: 100,
            name: 'Jose',
            id: '1293',
            description: 'this is item two', 
        }

    ]

    findAll(): Item[] {
        return this.items
    }
    //We can use the 'this' keyword becuase we are inside of a class. The function returns the items 
    // variable that has already been initialized inside the class. 

    findOne(id: string): Item {
        return this.items.find(item => item.id === id)
    }

}
