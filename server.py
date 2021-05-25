from flask import (Flask, render_template, request, redirect, jsonify, url_for)
from model import connect_to_db
from datetime import datetime
import crud


app = Flask(__name__)


# Test that we can see all melons in database 

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


# Test that user can login

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

# Test that a user can create a journal entry, Select a melon, and See all journal entries

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


@app.route('/showjournals.json', methods=['POST'])
def show_journals():

    email = request.json.get('email')
    user = crud.get_user(email)
    alljournals = crud.get_user_journals(user.user_id)
    dict_journals={}
    
    print(user)

    i=0
    for journal in alljournals:
        dict_p={}
        dict_p['title']=journal.title
        dict_p['rating']=journal.rating
        dict_p['entry']= journal.entry
        dict_p['id']= journal.journal_id
        dict_journals[i]=dict_p
        i=i+1
    
    # print("**************",dict_journals,"*******************")

    return jsonify(dict_journals)


@app.route('/memory.json', methods=['POST'])
def memory():

    melon_name = request.json.get('melon_name')
    
    melon = crud.get_melon_obj(melon_name)

    location = request.json.get('location')
    memory = request.json.get('memory')
    date = request.json.get('date')
    friend = request.json.get('friend')
    journal = request.json.get('journal_id')
    # journal_id = 1
    melon_img = None
    print('*******************', journal, '************************')

    memory = crud.create_memory(journal, melon_img, location, memory, date, friend)

    print('****************', memory, '*****************')

    # print(f'\n\n\n{journal}\n\n\n')
    memory_info = {
        'location': memory.location, 
        'memory': memory.memory, 
        'date': memory.date,
        'friend': memory.friend,
        'memory_id': memory.memory_id
    }

    return jsonify(memory_info)


@app.route('/showmemories.json', methods=['POST'])
def show_memories():

    # journal_id = request.json.get('journal_id')
    user_id = request.json.get('user_id')
    journals = crud.get_journal_by_user_id(user_id)
    print("******************", journals, "******************")

    allmemories=[]
    for j in journals:
        item = crud.get_memory_by_journal(j)
        allmemories.append(item)
        print(item)

    dict_memories={}

    print(allmemories)

    i=0
    for memory in allmemories:
        dict_p={}
        print("****************", memory[0], "*******************")
        dict_p['location']=memory[0].location
        dict_p['memory']=memory[0].memory
        dict_p['date']= memory[0].date
        dict_p['friend']= memory[0].friend
        dict_memories[i]=dict_p
        i=i+1
    
    print("**************",dict_memories,"*******************")
    
    return jsonify(dict_memories)

        

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')


if __name__ == '__main__':
    from flask import Flask

    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)