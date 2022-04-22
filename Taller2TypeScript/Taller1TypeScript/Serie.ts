export class Serie 
{
    id : number;
    name :string;
    channel: string;
    seasons : number;
    description: string;
    plataforma:string;
    imagen : string;
    constructor( id: number,name:string,channel:string,seasons:number,description:string, plataforma:string,imagen:string)
    {
        this.id= id;
        this.name=name;
        this.channel=channel;
        this.seasons=seasons;
        this.description=description;
        this.plataforma = plataforma;
        this.imagen=imagen;
    }




}