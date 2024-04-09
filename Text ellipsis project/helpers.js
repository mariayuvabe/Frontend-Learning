/**
 * @param {string} text
 */
export function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
   
    if(text.length<=10){
        return text
    }
    return text.substring(0,10)+"..."

}
