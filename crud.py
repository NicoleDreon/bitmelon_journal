from model import db, User, Memory, Melon, Journal_entry,Flavor,  connect_to_db

def create_user(user_name,email,password):

    user = User(user_name=user_name,email=email,password=password)
    db.session.add(user)
    db.session.commit()
    return user


def get_user(email):

    return User.query.filter_by(email=email).first()  


def create_melon(melon_name, melon_img,description):

    melon= Melon(melon_name=melon_name,melon_img=melon_img,description=description)
    db.session.add(melon)
    db.session.commit()
    return melon


def get_melons():

    melons = Melon.query.all()

    return melons

def get_melon_obj(melon_name):
    return Melon.query.filter(Melon.melon_name == melon_name).first()



def get_all_melons():
    return Melon.query.all()

def create_journal(title,rating,entry,favorite,melon,user):

    journal=Journal_entry(title=title,rating=rating,entry=entry,favorite=favorite,melon=melon,user=user)
    db.session.add(journal)
    db.session.commit()
    return journal

def create_flavor(sour, bitter, sweet, salty, savory):

    flavor = Flavor(sour=sour,bitter=bitter,sweet=sweet,salty=salty,savory=savory)
    db.session.add(flavor)
    db.session.commit()
    return flavor

def create_memory(journal,memory_img,location,memory,date,friend):

    memory = Memory(journal=journal,memory_img=memory_img,memory=memory,date=date,friend=friend,location=location)
    db.session.add(memory)
    db.session.commit()
    return memory



if __name__ == '__main__':
    from server import app
    connect_to_db(app)
