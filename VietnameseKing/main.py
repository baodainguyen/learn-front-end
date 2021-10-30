import mmap
import re

fileTxt = 'words.txt'
text = 'á/n/h/i/ệ/t/đ/ớ/i'
text = 'l/i/n/h/m/ụ/c'


def findVNCharWithRegex(w):
    rr = []
    a = 'à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ'
    rr.append(a)
    o = 'ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ'
    rr.append(o)
    e = 'è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ'
    rr.append(e)
    u = 'ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ'
    rr.append(u)
    i = 'ì|í|ị|ỉ|ĩ'
    rr.append(i)
    y = 'ỳ|ý|ỵ|ỷ|ỹ'
    rr.append(y)
    d = 'đ'
    rr.append(d)

    ws = []
    for _c in rr:
        x = re.findall(_c, w)
        if(len(x) > 0):
            ws = ws + x
    return ws

keyWords = findVNCharWithRegex(text)

def removeFowardSlash(text):
    return text.replace('/', '')

sText = removeFowardSlash(text)

def getWords(w):
    print(w)

def compareChars(w):
    l = len(sText)
    for _c in w:
        if sText.find(_c) > -1:
            l -= 1
    if l < 1:
        getWords(w)


def filterWordsWithRegex(w, ignoreChar):
    rr = []
    a = 'à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ'.replace(ignoreChar, '').replace('||', '|')
    rr.append(a)
    o = 'ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ'.replace(ignoreChar, '').replace('||', '|')
    rr.append(o)
    e = 'è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ'.replace(ignoreChar, '').replace('||', '|')
    rr.append(e)
    u = 'ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ'.replace(ignoreChar, '').replace('||', '|')
    rr.append(u)
    i = 'ì|í|ị|ỉ|ĩ'.replace(ignoreChar, '').replace('||', '|')
    rr.append(i)
    y = 'ỳ|ý|ỵ|ỷ|ỹ'.replace(ignoreChar, '').replace('||', '|')
    rr.append(y)
    d = 'đ'
    if(ignoreChar != d):
        rr.append(d)

    isIgnore = False
    for _c in rr:
        x = re.findall(_c, w)
        if(len(x) > 0):
            isIgnore = True
            break

    if(isIgnore == False): 
        compareChars(w)



def filterWordIn(word, vnCharArr):
    c = len(vnCharArr)
    w = word
    for _c in vnCharArr:
        i = w.find(_c)
        if(i > -1): 
            c -= 1
            w.replace(_c, '')
    
    if(c < 1 and len(sText) < len(word)):
        print(word)

def getWord(s, b, e):
    return (s[b:e].decode("utf-8"))

def find_Words(vnCharArr):
    with open(fileTxt, 'rb', 0) as f, \
         mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_READ) as s:
        max = s.find(b'}.') - 1
        print(max)
        i = 0
        j = 0
        while(j < max):
            i = s.find(b'{', i)
            i = s.find(b'"', i+1)
            j = s.find(b'"', i+1)
            word = getWord(s, i+1, j)
            filterWordIn(word, vnCharArr)
            j += 1
            
find_Words(keyWords)
print(keyWords)
