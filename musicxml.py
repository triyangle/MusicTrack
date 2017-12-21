from music21 import *

flute_xml = converter.parse('sheets/flute/flute.xml')
flute_midi = converter.parse('sheets/flute/flute.mid')
base_values = { "B#": 0, "C": 0, "C#": 1, "D-": 1, "D": 2, "D#": 3, "E-": 3, "E": 4, "F-": 4, "E#": 5, "F": 5, "F#": 6, "G-": 6, "G": 7, "G#": 8, "A-": 8, "A": 9, "A#": 10, "B-": 10, "B": 11, "C-": 11 }

#  flute_xml.show('text')
#  flute_midi.show('text')

song = flute_xml
song = song.stripTies()

# unfold repetitions
i = 0;
for a in song:
    if a.isStream:
        e = repeat.Expander(a)
        s2 = e.process()
        timing = s2.secondsMap
        song[i] = s2
    i += 1;

# todo: add note onsets
def octave_to_midi(note, octave):
    return base_values[note] + 12 * int(octave)

def getMusicProperties(x):
    s = '';
    t = '';
    pitch = str(x.pitch)
    s = str(octave_to_midi(pitch[:-1], pitch[-1])) + ", " + str(x.pitch) + ", " + str(x.duration.type) + ", " + str(x.duration.quarterLength)
    s += ", "
    if x.tie != None:
        t = x.tie.type;
    s += t + ", " + str(x.pitch.ps) + ", " + str(x.octave) # + str(x.seconds)  # x.seconds not always there
    return s


print('pitch, duration_string, duration, tie, midi pitch, octave')
for a in song.recurse(classFilter=('Note', 'Rest')):
    if a.isRest:
        print(a.fullName + ", " + str(a.duration.type) + ", " + str(a.duration.quarterLength))

    if a.isNote:
        s = getMusicProperties(a);
        print(s);

    if a.isChord:
        print("Starting Chord")
        for x in a._notes:
            s = getMusicProperties(x);
            print(s);
        print("Ending Chord")

print("Done.")

for x in song.recurse().notes:
    if x.isNote:
        print(x.pitch, x.duration.type, x.duration.quarterLength, x.tie, x.octave, x.quarterLength)    #x.seconds not always there

    if x.isChord:
        for a in x._notes:
            print(a.pitch, a.duration.type, a.duration.quarterLength, a.tie, a.octave, a.quarterLength)
