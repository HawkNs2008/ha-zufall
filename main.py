def on_button_a():
    zahlenfolge(randint(0, 100), randint(0, 100), 2)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

# gibt der Zahlenfolge  die parameter an

def on_button_b():
    zahlenfolge(randint(0, 100), randint(0, 100), 2)
    #randint(0, 100) bedeutet das eine zufallszahl
    #zwischen 0 und 100 gewählt wird und diese wird dann für
    #die jeweiligen parameter eingesetzt
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def zahlenfolge(anfang: number, ende: number, schrittweite: number):
    # Erstellt eine methode mit drei Parametern und zwar
    # dem start der Rechnung, dem ende der Rechnung
    # und in welchen abstÃĪnden gezÃĪhlt wird
    if anfang <= ende:
        # if bedeutet falls und prÃžft ob die bedinung gegeben ist oder nicht
        X = anfang
        while X <= ende:
            # while bedeutet dann und dies wird ausgelÃķsst wenn die bedinungen von if
            # gegeben sind
            basic.show_number(X)
            X += schrittweite
        basic.show_string("")