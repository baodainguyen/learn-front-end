import mmap
import re

fileTxt = 'words.txt'
text = 'k/ế/h/o/ạ/h/c'


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
print(keyWords)

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

def findWords(searchText):  #vnWordArr
    with open(fileTxt, 'rb', 0) as f, \
         mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_READ) as s:
        bText = searchText.encode()
        i = s.find(bText)
        z = s.rfind(bText)
        
        while (i > -1 and i <= z):
            end = endRight(s, i)
            start = beginLeft(s, i, end)
            word = getWord(s, start, end)
            #print(sText, word)
            filterWordsWithRegex(word, searchText)
            i = s.find(bText, end)
def find(vnWordArr):
    with open(fileTxt,'rb', 0) as f, mmap.mmap()




    
def getWord(s, b, e):
    return (s[b:e].decode("utf-8"))

def endRight(s, i):
    j = s.find(b'"', i)
    # print(s[i:j].decode("utf-8"), j )
    return j

def beginLeft(s, i, end):
    j = i - 1
    while ( -1 < j and j < i):
        k = s.find(b'"', j)
        if(k < 0 or k >= end):
            j -= 1
        else:
            break
    # print(j+1)
    return j+1

for _c in keyWords:
    findWords(_c)

