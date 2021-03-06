from unittest import TestCase
from server import app, journal
from model import Journal_entry, Melon, Memory, User, connect_to_db, db 
from datetime import date
import json 


def test_data():
    """Create some sample data."""

    # In case this is run more than once, empty out existing data
    Memory.query.delete()
    Journal_entry.query.delete()
    User.query.delete()
    Melon.query.delete()
    
    
    # Add sample data for user, melon, journal_entrY. and memory
    sameea = User(user_name='Sameea', password='123', email='sameea@gmail.com')
    pepino = Melon(melon_name='Pepino – Solanum muricatum', melon_img='https://res.cloudinary.com/dpapvtab4/image/upload/v1621265037/melons/Pepino_Solanum_muricatum_y3a5nu.png', 
        description='Technically, the Pepino (sweet cucumber) isn’t a melon. It is not a member of the gourd family, Cucurbitaceae. It isn’t even in the same order as melons, either. That said, culinarily, it is treated like a melon. They look like honeydew and have smooth, mottled skin.')

    db.session.add_all([sameea, pepino])
    db.session.commit() 
    
    sameeasjournal = Journal_entry(melon_id=pepino.melon_id, user_id=sameea.user_id, title=pepino.melon_name, rating=5, entry='The best melon I have ever tasted', favorite=True)
    
    db.session.add_all([sameeasjournal])
    db.session.commit()

    juicymemory = Memory(journal_id=sameeasjournal.journal_id, memory='Still the best melon I ever tasted', location='Upper P, Michigan', friend='Sherry', date=date.today())    
    
    db.session.add_all([juicymemory])
    db.session.commit()



class FlaskTestsAllMelons(TestCase):

    def setUp(self):
        """Stuff to do before every test."""

        self.client = app.test_client()
        app.config['TESTING'] = True

        connect_to_db(app, "postgresql:///testdb")

        db.create_all()
        test_data()   


    def test_viewallmelons(self):
        """  Can we view all melons in the database?  """

        result = self.client.get('/allmelons.json')
        self.assertEqual(result.status_code, 200)

    def tearDown(self):
        """Do at end of every test."""

        db.session.close()
        db.drop_all()
    


class FlaskTestsJournalEntry(TestCase):
   
    def setUp(self):
        """Stuff to do before every test."""

        self.client = app.test_client()
        app.config['TESTING'] = True

        connect_to_db(app, "postgresql:///testdb")

        db.create_all()
        test_data()

    def test_journalentry(self):
        """  Can we add a journal entry to the database?  """
      
        data={'melon_name': 'Pepino – Solanum muricatum', 'rating':5, 
                                'entry':'The best melon I have ever tasted', 'favorite':True,
                                'email': 'sameea@gmail.com'} 
        data= json.dumps(data)
        result = self.client.post('/journal.json', data=data, content_type='application/json')
        self.assertIn('title', result.json)
        print(result.json)

    def tearDown(self):
        """Do at end of every test."""

        db.session.close()
        db.drop_all()
    

class FlaskTestsAddMemory(TestCase):
   
    def setUp(self):
        """Stuff to do before every test."""

        self.client = app.test_client()
        app.config['TESTING'] = True

        connect_to_db(app, "postgresql:///testdb")

        db.create_all()
        test_data()

    def test_addmemory(self):
        """  Can we add a memory to the database?  """
      
        data={'journal_id':'1', 'memory':'Still the best melon I ever tasted', 'location':'Upper P, Michigan', 
        'friend':'Sherry', 'date':'2021-05-25'}
        data= json.dumps(data)
        result = self.client.post('/memory.json', data=data, content_type='application/json')
        self.assertIn('memory', result.json)
        
        print('***************************************************************************')
        print(result.json)

    def tearDown(self):
        """Do at end of every test."""

        db.session.close()
        db.drop_all()
    

class FlaskTestsShowJournal(TestCase):
    def setUp(self):
        """Stuff to do before every test."""

        self.client = app.test_client()
        app.config['TESTING'] = True

        connect_to_db(app, "postgresql:///testdb")

        db.create_all()
        test_data()

    def test_showjournal(self):
        """Can we retrieve the details of a user journal?"""

        result = self.client.get('/showjournals.json')
        self.assertEqual(result.status_code, 200)

    def tearDown(self):
        """Do at end of every test."""

        db.session.close()
        db.drop_all()


class FlaskTestsLogin(TestCase):
   
    def setUp(self):
        """Stuff to do before every test."""

        self.client = app.test_client()
        app.config['TESTING'] = True

        connect_to_db(app, "postgresql:///testdb")

        db.create_all()
        test_data()

    def test_login(self):
        """  Can we login to the application?  """
      
        data={'username': 'Sameea', 'user_id': 'sameea.user_id', 'email': 'sameea@gmail.com'} 
        data= json.dumps(data)
        result = self.client.post('/login.json', data=data, content_type='application/json')
        self.assertEqual(result.status_code, 200)
        print(result.json)

    def tearDown(self):
        """Do at end of every test."""

        db.session.close()
        db.drop_all()
    


if __name__ == "__main__":
    import unittest
    connect_to_db(app, db_uri='postgresql:///testdb', echo=False)

    unittest.main()
