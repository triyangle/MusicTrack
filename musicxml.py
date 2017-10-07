from music21 import *

xml = converter.parse('./Goblin_OST1_-_Stay_With_Me.mxl')
midi = converter.parse('./Goblin_OST1_-_Stay_With_Me.midi')

xml.show('text')
midi.show('text')
