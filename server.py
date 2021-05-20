from flask import (Flask, render_template, request, redirect, jsonify, url_for)
from model import connect_to_db
from datetime import datetime
import crud

app = Flask(__name__)





@app.route('/allmelons.json')
def all_melons():

    allmelons = crud.get_all_melons()
    dict_melon={}
    
    i=0
    for melon in allmelons:
        dict_p={}
        dict_p['name']=melon.melon_name
        dict_p['description']=melon.description
        dict_melon[i]=dict_p
        i=i+1
    
    print(type(dict_melon))
    print(type(dict_melon[1]))
   
    return jsonify(dict_melon)


@app.route('/login.json', methods=['GET', 'POST'])
def login():

    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        
        #need conditional to make sure password match
        user = crud.get_user(email)
        if user:
            if user.password == password:
                dict_user={'user_name':user.user_name}
                return jsonify(dict_user)
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