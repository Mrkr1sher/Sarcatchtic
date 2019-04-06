from flask import *
import processor

app = Flask(__name__)

@app.route("/")
def handle():
    return "Nothing"

@app.route("/submit")
def handleInput():
    print("Received request" + request.form['input'])
    return "Nothing" #proccessor.process(request.form['input'])
    
app.run(ssl_context='adhoc',host='0.0.0.0',port=80)
