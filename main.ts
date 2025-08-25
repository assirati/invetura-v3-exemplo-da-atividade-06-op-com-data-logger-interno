input.onPinPressed(TouchPin.P0, function () {
    datalogger.log(datalogger.createCV("Jogar bola ou esportes", 1))
})
input.onPinPressed(TouchPin.P2, function () {
    datalogger.log(datalogger.createCV("Brincar de outra coisa", 1))
})
input.onPinPressed(TouchPin.P1, function () {
    datalogger.log(datalogger.createCV("Conversar com os amigos", 1))
})
datalogger.setColumnTitles(
"Jogar bola ou esportes",
"Conversar com os amigos",
"Brincar de outra coisa"
)
