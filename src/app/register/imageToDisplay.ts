export class ImageToDisplay{
    constructor(id:number,imageName:string,imageType:string,pic:any[]){

        this.id=id;
        this.imageName=imageName;
        this.imageType=imageType;
        this.pic=pic;
    }
    id:number;
    imageName:string;
    imageType:string;
    pic:any[];

}