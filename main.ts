input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(counter)
    strip.clear()
    strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    counter += 1
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    counter = 0
    strip.clear()
    strip.show()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (counter > 0) {
        counter += -1
        basic.showNumber(counter)
        strip.clear()
        strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
})
let counter = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 120, NeoPixelMode.RGB)
counter = 0
basic.forever(function () {
	
})
