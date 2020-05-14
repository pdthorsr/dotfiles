import os
from dotenv import load_dotenv

load_dotenv("../dots/envfile")
dotfilesdir = os.getenv("DOTFILESDIR")
homedir = "/home/" + os.getenv("SCRIPTUSERNAME")
homedirfiles = os.listdir(homedir)
for file in os.listdir(dotfilesdir):
    new_file_name = "." + file
    # print(new_file_name)
    if new_file_name not in homedirfiles:
        print(new_file_name)
        os.link("{}/{}".format(dotfilesdir, file), "{}{}".format(homedir, new_file_name))
