input.buttonA.onEvent(ButtonEvent.Click, function () {
    Initialize()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    Initialize()
})
function Initialize () {
    Armed = true
    HitCount = 0
    servos.A1.setAngle(0)
    light.showRing(
    `red red red red red red red red red red`
    )
    pause(100)
    light.clear()
}
let HitCount = 0
let Armed = false
Initialize()
forever(function () {
    if (Armed) {
        if (input.ambientColor() == Colors.Green) {
            if (HitCount >= 2) {
                Armed = false
                servos.A1.setAngle(180)
                light.showRing(
                `pink pink pink pink pink pink pink pink pink pink`
                )
            }
            HitCount += 1
        } else {
            HitCount = 0
        }
    }
    pause(1000)
})
