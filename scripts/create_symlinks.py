import os

for dirpath, _,path in os.walk("."):
    path = string(dirpath) + string(path)
    print(path)
