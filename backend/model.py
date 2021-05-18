from flask_sqlalchemy import SQLAlchemy
from datetime import date
db =SQLAlchemy()


class User(db.Model):

    __tablename__ = 'users'

    user_id = db.Column(db.Integer, primary_key= True, autoincrement= True)

    user_name = db.Column(db.String, nullable= False)
    password = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False, unique=True)

    def __repr__(self):
        return f'<User user_name = {self.user_name} email = {self.email}>'


class Memory(db.Model):

    __tablename__ = 'memories'

    memory_id = db.Column(db.Integer, primary_key= True, autoincrement= True)
    journal_id = db.Column(db.Integer, db.ForeignKey('journal_entries.journal_id'), nullable=False)

    memory_img = db.Column(db.String)
    location = db.Column(db.String)
    memory = db.Column(db.Text)
    date = db.Column(db.Date)
    friend = db.Column(db.String)

    journal_entry = db.relationship('Journal_entry', backref='memories')
  

    def __repr__(self):
        return f'<Memory memory_id = {self.memory_id} location = {self.location}>'


class Melon(db.Model):

    __tablename__ = 'melons'

    melon_id = db.Column(db.Integer, primary_key= True, autoincrement= True)

    melon_name = db.Column(db.String, unique=True)
    melon_img = db.Column(db.String)
    description = db.Column(db.String)

    def __repr__(self):
        return f'<Melon melon_name = {self.melon_name} melon_id = {self.melon_id}>'


class Flavor(db.Model):

    __tablename__ = 'flavors'

    flavor_id = db.Column(db.Integer, primary_key= True, autoincrement= True)

    sour = db.Column(db.Integer)
    bitter = db.Column(db.Integer)
    sweet = db.Column(db.Integer)
    salty = db.Column(db.Integer)
    savory = db.Column(db.Integer)

    def __repr__(self):
        return f'<Flavor flavor_id = {self.flavor_id}>'


class Journal_entry(db.Model):

    __tablename__ = 'journal_entries'

    journal_id = db.Column(db.Integer, primary_key= True, autoincrement= True)
    melon_id = db.Column(db.Integer, db.ForeignKey('melons.melon_id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'), nullable=False)
    flavor_id = db.Column(db.Integer, db.ForeignKey('flavors.flavor_id'), nullable=False)

    title = db.Column(db.String, nullable=False)
    rating = db.Column(db.Integer, nullable=False) 
    entry = db.Column(db.Text, nullable=False)
    favorite = db.Column(db.Boolean, default=False)

    melon = db.relationship('Melon', backref= 'journal_entries')
    user = db.relationship('User', backref='journal_entries')
    flavor = db.relationship('Flavor', backref= 'journal_entries')

    def __repr__(self):
        return f'<Journal_entry title = {self.title} rating= {self.rating}>'



def connect_to_db(flask_app, db_uri='postgresql:///melons', echo=True):
    flask_app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    flask_app.config['SQLALCHEMY_ECHO'] = echo
    flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.app = flask_app
    db.init_app(flask_app)

    print('Connected to the db!')



if __name__ == "__main__":
    from server import app
    connect_to_db(app)