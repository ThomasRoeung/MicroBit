input.onButtonPressed(Button.A, function () {
    rope += -0.1
})
input.onButtonPressed(Button.B, function () {
    rope += 0.1
})
let rope = 2
let ropey = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(rope, ropey)
})
