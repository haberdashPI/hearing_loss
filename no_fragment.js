
module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    return resolve(
      markdown
        .split('\n')
        .map((line, index) => {
          if (/<iframe/.test(line) || /<audio/.test(line)){
            return ""
          }
          else if (/^\s*-\s*.*\|\s*$/.test(line)){
            var result = /^(\s*-\s*.*)\|\s*$/.exec(line)
            return result[1]
          }else if (/<images/.test(line)){
            var result =
              /<images\s*src\s*=\"(.*)%n(.*)\"\s*count\s*=\s*([0-9]+)\s*\/>/.exec(line)
            // console.log("line: "+line)
            // console.log(result)
            if(result === null){
              console.error("Maleformed images tag near line "+index+":\n"+
                line)
              return line
            }

            var range = Number(result[3])
            var images = [];
            images += "<div class=\"build\">\n"
            images += "<img src=\""+result[1]+(range)+result[2]+"\"/>\n"
            images += "</div>"
            // console.log("Transforming to \n"+images)
            return images
          }else if(/class="fragment"/.test(line)){
            return line.replace(/class="fragment"/,"")
          }else{
            return line
          }
        })
        .join('\n')
    );
  });
}
