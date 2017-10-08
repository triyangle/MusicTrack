import os

def rename():
    i = 1
    for filename in os.listdir('.'):
        if filename[-3:] == 'png':
            print(filename, '→ ' + str(i) + '.png')
            os.rename(filename, str(i) + '.png')
            i += 1
