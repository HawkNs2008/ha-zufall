input.onButtonEvent(Button.A, input.buttonEventClick(), function on_button_a() {
    zahlenfolge(0, 10, 2)
})
//  gibt der Zahlenfolge  die parameter an
input.onButtonEvent(Button.B, input.buttonEventClick(), function on_button_b() {
    zahlenfolge(1, 10, 2)
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

