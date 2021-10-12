let mijnwaarde = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(mijnwaarde)
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    mijnwaarde = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P0, 0)
    led.plotBarGraph(
    mijnwaarde,
    1023
    )
    basic.pause(5000)
})
