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
    
    # print(type(dict_melon))
    # print(type(dict_melon[1]))
   
    return jsonify(dict_melon)


@app.route('/login.json', methods=['POST'])
def login():

    email = request.json.get('email')
    password = request.json.get('password')
    # print(email, password)
    #need conditional to make sure password match
    user = crud.get_user(email)
    if user:
        if user.password == password:
            
            user_info = {
                'user_name': user.user_name,
                'email': user.email,
                'user_id': user.user_id
            }
            # print(user_info)

            return jsonify(user_info)
        else:
            return 'incorrect password'
    return 'no user available'



@app.route('/journal.json', methods=['POST'])
def journal():
    #should be knock down flavor for now?
    #need to figure out title/melon_name passing of information from .jsx to server
    #how do we get user info? 
    # pass 

    melon_name = request.json.get('melon_name')
    
    melon = crud.get_melon_obj(melon_name)

    rating = request.json.get('rating')
    rating = int(rating)
    entry = request.json.get('entry')
    favorite = request.json.get('favorite')

    if favorite == 'True':
        favorite = True
    elif favorite == 'False':
        favorite = False

    # favorite = bool(favorite) #always reverting to true

    title= melon_name
    email = request.json.get('email')
    user = crud.get_user(email)
    journal = crud.create_journal(title,rating,entry,favorite,melon, user)
    print('****************', user, '*****************')
    
    # print(f'\n\n\n{journal}\n\n\n')
    journal_info = {
        'title': journal.title, 
        'rating': journal.rating, 
        'entry': journal.entry,
        'favorite': journal.favorite,
        'journal_id': journal.journal_id
    }

    return jsonify(journal_info)


@app.route('/showjournals.json')
def show_journals():

    user = crud.get_user('sameea@gmail.com')
    alljournals = crud.get_user_journals(user.user_id)
    dict_journals={}

    print(user)

    i=0
    for journal in alljournals:
        dict_p={}
        dict_p['title']=journal.title
        dict_p['rating']=journal.rating
        dict_p['entry']= journal.entry
        dict_journals[i]=dict_p
        i=i+1
    
    # print("**************",dict_journals,"*******************")

    return jsonify(dict_journals)

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