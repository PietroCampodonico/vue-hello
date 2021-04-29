var app = new Vue(
{
    el: "#root",
    data: {
            wrapperStyles: "wrapperStyles",
            greetings: "hello from Vue!",
            vulcanHand:"🖖",
            h1Styles: "h1Styles",
            handStyles: "handStyles",
            btn: "Click to be Greeted",
            displayContent: "none"
        },

    methods: {
        saluta: function () {
            if (this.displayContent == "none") {
              this.displayContent = "inline-block",
              this.btn = "click to Reset"

            }  else {
                    this.displayContent = "none"
                    this.btn = "Click to be Greeted"
            }
            
        }
    }
})
