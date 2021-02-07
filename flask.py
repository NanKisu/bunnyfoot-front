import os
from flask import Flask, request
from werkzeug.utils import secure_filename

app = Flask(__name__)

@app.route("/")
def test():
  return "test"   

if __name__ == "__main__": 
  app.run()
