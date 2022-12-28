import mmap
import re
fileTxt = 'words.txt'
text = 'a/c/n/a/d/h'
text = 'i/ặ/c/g/á/c/i'
#text = 'c/c/h/ị/h/t/ủ'
#text = 'c/ồ/n/l/ặ/c/p/m/g/ơ'
#text = 'a/d/i/đ/à/p/h/ậ/t'
text = 'n/g/o/n/ă/n/t/r'
text = 'x/ớ/c/ư/p/á'
text = str(input())     # python 3.xx (read text from cmd)
# python3.10 main.py
# c/h/ồ/g/t/u/i/ệ/n/n   (input cmd)
# cuồng nhiệt           (output)

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

def compareChars(w):
    l = len(sText)
    for _c in w:
        if sText.find(_c) > -1:
            l -= 1
    if l < 1:
        print(w)
def getNotContainChars(ignoreCharArr):
    rr = []
    a = 'à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ'
    for ignoreChar in ignoreCharArr:
        a = a.replace(ignoreChar, '').replace('||', '|')
    rr.append(a)
    o = 'ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ'
    for ignoreChar in ignoreCharArr:
        o = o.replace(ignoreChar, '').replace('||', '|')
    rr.append(o)
    e = 'è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ'
    for ignoreChar in ignoreCharArr: 
        e = e.replace(ignoreChar, '').replace('||', '|')
    rr.append(e)
    u = 'ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ'
    for ignoreChar in ignoreCharArr:
        u = u.replace(ignoreChar, '').replace('||', '|')
    rr.append(u)
    i = 'ì|í|ị|ỉ|ĩ'
    for ignoreChar in ignoreCharArr:
        i = i.replace(ignoreChar, '').replace('||', '|')
    rr.append(i)
    y = 'ỳ|ý|ỵ|ỷ|ỹ'
    for ignoreChar in ignoreCharArr:
        y = y.replace(ignoreChar, '').replace('||', '|')
    rr.append(y)
    d = 'đ'
    i = 0
    for ignoreChar in ignoreCharArr:
        if(ignoreChar != d):
            i += 1
    if(i == len(ignoreCharArr)):
        rr.append(d)
    return rr
def filterWordsWithRegex(w, ignoreCharArr):
    rr = getNotContainChars(ignoreCharArr)
    
    isIgnore = False
    for _c in rr:
        x = re.findall(_c, w)           #array
        y = [a for a in x if a != '']   #filter
        if(len(y) > 0):
            isIgnore = True
            break                       #break for

    if(isIgnore == False): 
        compareChars(w)

def anyCharDiff(w):
    for _c in sText:
        if(w.find(_c) < 0):
            return True
    
    return False

def filterWordIn(word, vnCharArr):
    c = len(vnCharArr)
    w = word
    for _c in vnCharArr:
        i = w.find(_c)
        if(i > -1): 
            c -= 1
            w.replace(_c, '')
    
    if(c < 1 and len(sText) < len(word) and anyCharDiff(w) == False):
        filterWordsWithRegex(word, keyWords)

def getWord(s, bi, ex):
    return (s[bi:ex].decode("utf-8"))

def find_Words(vnCharArr):
    with open(fileTxt, 'rb', 0) as f, \
         mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_READ) as s:
        max = s.find(b'}.') - 1
        i = 0
        j = 0
        while(j < max):
            i = s.find(b'{', i)
            i = s.find(b'"', i+1)
            j = s.find(b'"', i+1)
            word = getWord(s, i+1, j)
            filterWordIn(word, vnCharArr)
            j += 1
            
#print(keyWords)
find_Words(keyWords)
