from Flask import *
import processor

app = Flask(__main__)

@app.route("/submit")
def handleInput():
    return proccessor.process(request.form['input'])
    

