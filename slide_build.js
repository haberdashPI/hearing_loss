module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    return resolve(
      markdown
        .split('\n')
        .map((line, index) => {
          if (/^\s*(-|[0-9]+)\s*.*\|\s*$/.test(line)){
            var result = /^(\s*(-|[0-9]+)\s*.*)\|\s*$/.exec(line)
            return result[1] + "<!-- .element: class=\"fragment\" -->"
          }else if (/<images/.test(line)){
            var result =
              /<images\s*src\s*=\"(.*)%n(.*)\"\s*count\s*=\s*([0-9]+)\s*\/>/.
              exec(line)
            if(result === null){
              console.error("Maleformed images tag near line "+index+":\n"+
                line)
              return line
            }

            var range = Number(result[3])
            var images = [];
            images += "<div class=\"build\">\n"
            for(var i=0; i < range; i++){
              images += "<img src=\""+result[1]+(i+1)+result[2]+"\" "+
                "class=\"fragment\"/>\n"
            }
            images += "</div>"
            // console.log("Transforming to \n"+images)
            return images
          }else{
            return line
          }
        })
        .join('\n')
    );
  });
}
