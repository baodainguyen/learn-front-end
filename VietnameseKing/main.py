import mmap

searchText = 'á '

def check():
    found = False
    with open('words.txt', 'rb', 0) as f, \
         mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_READ) as s:
        bText = searchText.encode()
        i = s.find(bText)
        z = s.rfind(bText)
        print(i, z)
        while (i > -1 and i <= z):
            j = s.find(b'"', i)
            print(s[i:j].decode("utf-8") )
            i = s.find(bText, j)

        if i != -1:
            j = s.find(b'"', i)
            print(s[i:j].decode("utf-8") )
            print(j)
            return True
    return False

if check():
    print('true')
else:
    print('false')
    
