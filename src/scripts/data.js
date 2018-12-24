const data = {
  postLego (legoToSave) {
    fetch("http://localhost:8088/lego", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})
  }
}
const color = {
    colorLego (colorToSave) {
      fetch("http://localhost:8088/color", { // Replace "url" with your API's URL
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(colorToSave)
  })
    }
  }