input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    basic.pause(5000)
})
let afstand = 0
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
basic.forever(function () {
    afstand = Kitronik_Move_Motor.measure()
    if (afstand) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 10)
    } else if (false) {
    	
    } else {
        Kitronik_Move_Motor.stop()
    }
})
