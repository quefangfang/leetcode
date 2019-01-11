/**
* @param {string} moves
* @return {boolean}
*/
var judgeCircle = function (moves) {
    let hDirection = 0;
    let vDirection = 0;
    for (let i = 0; i < moves.length; i++) {
        switch (moves.charAt(i)) {
            case 'U':
                vDirection++;
                break;
            case 'D':
                vDirection--;
                break;
            case 'L':
                hDirection--;
                break;
            case 'R':
                hDirection++;
            default:
                break;
        }
    }
    return vDirection == 0 && hDirection == 0 ? true : false;
};