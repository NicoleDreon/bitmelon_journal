from flask import (Flask, render_template, request, redirect, jsonify)
from model import connect_to_db
from datetime import datetime
import crud

app = Flask(__name__)




@app.route('/login', methods=['GET', 'POST'])
def login():

    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        
        #need conditional to make sure password match
        user = crud.get_user(email)
        if user:
            if user.password == password:
                return 'logged in'
            else:
                return 'incorrect password'
        print(user)
        # userInfo = {'user_name' : user.user_name}

    return 'no user available'


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')


if __name__ == '__main__':
    from flask import Flask

    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)