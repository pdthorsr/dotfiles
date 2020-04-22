import os
from py_dotenv import read_dotenv

read_dotenv("../dots/envfile")
print(os.getenv("MINERVADIR"))
