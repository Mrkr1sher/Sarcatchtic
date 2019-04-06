from flask import *
import processor

app = Flask(__name__)

@app.route("/")
def handle():
    
    if(request.form["input"] == None)
        return "Nothing"

    return request.form["input"] + " with regards from the server"

@app.route("/submit")
def handleInput():
    print("Received request" + request.form['input'])
    return "Nothing" #proccessor.process(request.form['input'])
    
if __name__ == "__main__":
    app.run(ssl_context=('/etc/letsencrypt/live/teandfriends.rocks/fullchain.pem', '/etc/letsencrypt/live/teandfriends.rocks/privkey.pem'))
