input.onButtonPressed(Button.A, function () {
    rope += -0.1
})
input.onButtonPressed(Button.B, function () {
    rope += 0.1
})
let winsa = 0
let rope = 2
let ropey = 2
let winsb = 0
winsa += 0
basic.forever(function () {
    basic.clearScreen()
    led.plot(rope, ropey)
    if (rope < 0) {
        winsa += 1
        basic.showNumber(winsa)
        rope = 2
    }
    if (rope > 5) {
        winsb += 1
        basic.showNumber(winsb)
        rope = 2
    }
})
