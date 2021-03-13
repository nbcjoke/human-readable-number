module.exports = function toReadable (number) {
    let a;
    const On = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const Tn = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const Hundreds = ['one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
    if (number > 119 && number < 1000) {
       if(number % 100 < 20) {
          a = Hundreds[Math.floor(number / 100)] + '' + On[number % 100]
       } else {
              a = Hundreds[Math.floor(number / 100)] + '' + Tn[Math.floor((number / 100) / 10)] + '' + On[number % 10];
         }
        return a.trim();
    }
    if (number > 99 && number < 120) {
       a = Hundreds[Math.floor(number / 100)] + '' + On[number % 100];
       return a.trim();
    }
    if (number >= 20 && number < 100) {
       a = Tn[Math.floor(number / 10)] + '' + On[number % 10];
       return a.trim();
    }
    if (number < 20) {
       if(number === 0) {
          return 'zero';
       }
       return On[number]; 
    }
}
