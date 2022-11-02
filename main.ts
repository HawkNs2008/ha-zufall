input.onButtonEvent(Button.A, input.buttonEventClick(), function on_button_a() {
    zahlenfolge(randint(0, 100), randint(0, 100), 2)
})
//  gibt der Zahlenfolge  die parameter an
// randint(0, 100) bedeutet das eine zufallszahl
// zwischen 0 und 100 gewählt wird und diese wird dann für
// die jeweiligen parameter eingesetzt
input.onButtonEvent(Button.B, input.buttonEventClick(), function on_button_b() {
    zahlenfolge(randint(0, 100), randint(0, 100), 2)
})
function zahlenfolge(anfang: number, ende: number, schrittweite: number) {
    let X: number;
    //  Erstellt eine methode mit drei Parametern und zwar
    //  dem start der Rechnung, dem ende der Rechnung
    //  und in welchen abstÃĪnden gezÃĪhlt wird
    if (anfang <= ende) {
        //  if bedeutet falls und prÃžft ob die bedinung gegeben ist oder nicht
        X = anfang
        while (X <= ende) {
            //  while bedeutet dann und dies wird ausgelÃķsst wenn die bedinungen von if
            //  gegeben sind
            basic.showNumber(X)
            X += schrittweite
        }
        basic.showString("")
    }
    
}

