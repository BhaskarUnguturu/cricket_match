import { PipeTransform, Pipe } from '@angular/core';
import { MatchRes } from '../matchRes';

@Pipe({
    name:'newMatchFilter'
})
//for transforming data we use pipe 
//here we are making aq custom pipe that will generate output depending on the ,match type

export class NewMatchFilter implements PipeTransform{

    transform(newMatchResultsArray:MatchRes[],getSearchedText:string):MatchRes[]{

        if(!newMatchResultsArray || !getSearchedText){
            return newMatchResultsArray;
        }
        
        //newmatch filtered is a variable that is storing each element of the aray newmatcharray
        let result= newMatchResultsArray.filter(newMatchfiltered=>newMatchfiltered.type.toLowerCase().indexOf(getSearchedText.toLowerCase()) !==-1);
        if(result.length==0){
            return [null];
        }
        return result;
    
}
}