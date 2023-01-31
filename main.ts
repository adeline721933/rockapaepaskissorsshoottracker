function UpdateScores () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1: " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2: " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds_Played)
}
input.onButtonPressed(Button.A, function () {
    basic.showString("A", 70)
basic.clearScreen()
    P1 += 1
    Rounds_Played += 1
    UpdateScores()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T", 70)
basic.clearScreen()
    Ties += 1
    Rounds_Played += 1
    UpdateScores()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B", 70)
basic.clearScreen()
    P2 += 1
    Rounds_Played += 1
    UpdateScores()
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Care for a game?")
    Rounds_Played = 0
    P1 = 0
    P2 = 0
    Ties = 0
    basic.pause(2000)
    UpdateScores()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    OLED.clear()
    if (P1 < P2) {
        OLED.writeStringNewLine("Player 1 Wins!")
        Reset()
    }
    if (P1 > P2) {
        OLED.writeStringNewLine("Player 2 Wins!")
        Reset()
    }
    if (P1 == P2) {
        OLED.writeStringNewLine("It's a tie!")
        Reset()
    }
})
let Rounds_Played = 0
let Ties = 0
let P2 = 0
let P1 = 0
Reset()
