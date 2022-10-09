export class RegisterDetails {
    constructor(cMatchusername: string, cMatchpassword: string) {
        this.cMatchUserName = cMatchusername;
        this.cMatchPassword = cMatchpassword;
        
    }
    
    cId:number
    cMatchUserName: string;
    cMatchPassword: string;
    cImageType:string;
    cImageName:string;
    cMatchImage: any[]


}
