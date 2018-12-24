const eventListeners = {
    handleFormSubmission () {
        // console.log("button clicked");
   //get inoput value from form//
        const creator = document.querySelector("#lego__creator").value;
        const name = document.querySelector("#lego__name").value;
        const color = document.querySelector("#lego__color").value;
        const shape = document.querySelector("#lego__shape").value;
        //create an object to represent a lego
        const legoObject = {
            creatorName : creator,
            legoName: name,
            legoColor: color,
            legoShape: shape
        }
   data.postLego(legoObject);
    },
    handlecolorSubmission () {
        const colors = document.querySelector("#lego__color").value;
        const colorLego = {
            color : green,
            color : yellow,
            color : blue,
            color : black,
            color : white

        }
    color.colorLego(colorLego);
    }
};
    