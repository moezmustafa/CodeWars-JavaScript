/* https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
 *    
 * The wave (known as the Mexican wave in the English-speaking world outside North America) 
 * is an example of metachronal rhythm achieved in a packed stadium when successive groups of 
 * spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, 
 * the spectator returns to the usual seated position. The result is a wave of standing 
 * spectators that travels through the crowd, even though individual spectators never move 
 * away from their seats. In many large arenas the crowd is seated in a contiguous circuit all
 * the way around the sport field, and so the wave is able to travel continuously around the arena; 
 * in discontiguous seating arrangements, the wave can instead reflect back and forth through the
 * crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only 
 * one wave crest will be present at any given time in an arena, although simultaneous, 
 * counter-rotating waves have been produced.
 * 
 * wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
 */

function wave() {
    var str = arguments[0];
    var result = [];
    var res = str.toLowerCase().replace(/ /g, "_").split("");

    for (var i = 0; i < res.length; i++) {
        if (res[i] === "_") {
            if (i > 0) {
                res[i - 1] = res[i - 1].toLowerCase();
                continue;
            }
            else if (i == 0) {
                continue;
            }
            else if (i == res.length) {
                continue;
            }
        }

        res[i] = res[i].toUpperCase();

        if (i > 0) {
            res[i - 1] = res[i - 1].toLowerCase();
        }

        var strWord = res.toString();
        var aux = strWord.split("");
        result.push(aux);
    }
    for (var j = 0; j < result.length; j++) {
        result[j] = result[j].toString().replace(/,/g, "").replace(/_/g, " ");
    }
    return result;
}
console.log(wave("codewars"));
//[ 'Thadeu', 'tHadeu', 'thAdeu', 'thaDeu', 'thadEu', 'thadeU' ]