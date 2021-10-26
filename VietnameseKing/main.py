import mmap

searchText = 'aá'

def check():
    found = False
    with open('words.txt', 'rb', 0) as f, \
         mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_READ) as s:
        if s.find(searchText.encode()) != -1:
            return True
    return False

if check():
    print('true')
else:
    print('false')
    
