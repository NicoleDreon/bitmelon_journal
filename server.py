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
        dict_p['url']= melon.melon_img
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

#for the form we need- melon names from database as list, to show in drop down 
#journal entry
#create route and function 
#get form details with .get request
#get melon - get melon id from name selected by user 
#get flavor - create flavor object 
#get user 
#create journal entry with crud function (need melonid, flavorid, userid)
# @app.route('/melons.json')
# def get_melons():

#     melons = crud.get_melons()

#     melon_dicts = []
#     melon_names = []
#     for melon in melons:
#         melon_dict = {}
#         melon_dict['melon_id'] = melon.melon_id
#         melon_dict['melon_name'] = melon.melon_name
#         melon_dict['melon_img'] = melon.melon_img
#         melon_dict['description'] = melon.description
#         melon_dicts.append(melon_dict)

#     for melon in melons:
#         name = melon.melon_name
#         melon_names.append(name)
        
#     print('*******')
#     print(melon_names)
#     print('*******')

#     return jsonify(melon_names)

        

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')


if __name__ == '__main__':
    from flask import Flask

    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)