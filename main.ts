input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(6000)
    basic.clearScreen()
    for (let index = 0; index < 3; index++) {
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.clearScreen()
    }
    control.reset()
})
let ido = 10
while (ido == 10) {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.pause(8000)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(6000)
    basic.clearScreen()
    for (let index = 0; index < 3; index++) {
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.clearScreen()
    }
}
basic.forever(function () {
	
})
