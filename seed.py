import model
import crud
import server
import json
import os

os.system('dropdb melons')
os.system('createdb melons')

model.connect_to_db(server.app)
model.db.create_all()

with open('data/melons.json') as f:
    melon_data=json.loads(f.read())
melons_list=[]
for melon in melon_data:
    
    melon_name=melon['name']
    melon_img = melon['img']
    description= melon['description']
    melon_obj=crud.create_melon(melon_name,melon_img,description)
    print(melon_obj)
    melons_list.append(melon)
    #model.Melon(melon_name=melon_name,melon_img=melon_img,description=description)

    
user1=model.User(user_name="Sameea",email="sameea@gmail.com",password="123")
user2=model.User(user_name="Nicole",email="nicole@gmail.com",password="123")
user3=model.User(user_name="Jessica",email="jessica@gmail.com",password="123")
user4=model.User(user_name="QueenTesa",email="queentesa@gmail.com",password="123")
user5=model.User(user_name="Sherry",email="sherry@gmail.com",password="123")





model.db.session.add_all([user1,user2,user3,user4,user5])
model.db.session.commit()
