//Commands Legend 
//Start server with nodemon: yarn run start:dev
//Generate controller: nest g controller <controller name>
//Generate a service: nest g service <target folder>  

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'; /*In this line we are importing the controller from
Nest along with all of the http requests that we want the controller to make use of. We will activate
the controller and the subsequent http requests below using TS decorators */
import { read } from 'fs';

import { CreateItemDto } from './dto/create-item.dto'; 
import { ItemsService } from './items.service'; 
import { Item } from './interfaces/item.interface'


@Controller('items')
export class ItemsController {
    constructor (private readonly itemsService : ItemsService) {}
    /* Here we are injecting our service as a dependency. The service serves as a bridge between our 
    database and our controller. This service is basically giving the controller access to the db.
    The 'this' keyword can now be used to access items inside the service. */

    @Get() /* @Get() is telling Nest to create an endpoint for 'items' which is specified within the 
    parentheses of @Controller() above.  */

    findAll(): Item[] {
        return this.itemsService.findAll()
    }

    @Get(':id') 
    findOne(@Param('id') id): Item {
        return this.itemsService.findOne(id)
    }

    /* Note: to test the above route in Postman (or any http request that takes in an id) you need 
    to enter http://localhost:3000/items/100 where 100 is any custom id that you enter on the end 
    of the url. URL params (including id's) are typically assigned in the browser, but this needs 
    to be done by hand when using postman. */ 

    // Read more: https://www.sitepoint.com/get-url-parameters-with-javascript/

    @Post()

    create(@Body() createItemDto: CreateItemDto):string {
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}` 
    }
    /*Above in the parantheses of create(), we are bringing in the @Body() decorator to signify that 
    we want our post request to carry a data bearing object. We are calling our object 'createItemDto' 
    (completely arbitrary), and setting it to the type of the CreateItemDto that we have imported. This
    allows us to return fields that are specific to the class that we have defined elswhere and imported. */

    @Delete(':id')
    delete(@Param() param): string {
        return `Item ${param.id} has been deleted` 
    }

    @Put(':id') 
    update(@Body() updateItemDto: CreateItemDto, @Param() param): string {
        return `Status Code: ${param.id}. ${updateItemDto.name} has been updated` 
    }

} 
