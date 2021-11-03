// DTO stand for data transfer object. The class below is a map of the fields that we want to 
// have available for the user when they send a post request to the db using this DTO as a vehicle

export class CreateItemDto {
    readonly name: string
    readonly description: string
    readonly qty: string
}