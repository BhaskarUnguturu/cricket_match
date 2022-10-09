export class ImageReciever {
    constructor(imageName: string, imageType: string, imagePic: any[]) {
        this.imageName = imageName;
        this.imageType = imageType;
        this.imagePic = imagePic;
    } 
    imageName: string;
    imageType: string;
    imagePic: any[];
}