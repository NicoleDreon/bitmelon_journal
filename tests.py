from unittest import TestCase
from server import app, journal
from test_model import Journal_entry, Melon, Memory, User, connect_to_db, db 
from flask import session
from datetime import date


def test_data():
    """Create some sample data."""

    # In case this is run more than once, empty out existing data
    User.query.delete()
    Memory.query.delete()
    Melon.query.delete()
    Journal_entry.query.delete()

    
    # Add sample User, melon, journal_entrY. and memory
    carol = User(user_name='CarolT', password=t2455xx, email='carolt@gmail.com')
    pepino = Melon(melon_name='Pepino – Solanum muricatum', melon_img='https://res.cloudinary.com/dpapvtab4/image/upload/v1621265037/melons/Pepino_Solanum_muricatum_y3a5nu.png', 
        description='Technically, the Pepino (sweet cucumber) isn’t a melon. It is not a member of the gourd family, Cucurbitaceae. It isn’t even in the same order as melons, either. That said, culinarily, it is treated like a melon. They look like honeydew and have smooth, mottled skin.')

    db.session.add_all([carol, pepino])
    db.session.commit() 
    
    carolsjournal = Journal_entry(melon_id=pepino.melon_id, user_id=carol.user_id, title=pepino.melon_name, rating=5, entry='The best melon I have ever tasted', favorite=True)
    juicymemory = Memory(journal_id=carolsjournal.journal_id, memory='Still the best melon I ever tasted', location='Upper P, Michigan', friend='Sherry', date=date.now())    
    
    db.session.add_all([carolsjournal, juicymemory])
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
        self.assertIn(b"Casaba", result.data)

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
        sample_data()

    def test_journalentry(self):
        """  Can we add a journal entry and/or memory to the database?  """
        
        result = self.client.post('/journal.json',
                                data={'title': 'pepino.melon_name', 'rating':5, 
                                'entry':'The best melon I have ever tasted', 'favorite':True,
                                'memory':'Still the best melon I ever tasted', 'location':'Upper P, Michigan',
                                'friend': 'Sherry', 'date': date.now()}, follow_redirects=True)
        self.assertIn(b"Memory Location", result.data)

    def tearDown(self):
        """Do at end of every test."""

        db.session.close()
        db.drop_all()
    


# class FlaskTestsLoggedIn(TestCase):
#     """Flask tests with user logged in to session."""

#     def setUp(self):
#         """Stuff to do before every test."""

#         app.config['TESTING'] = True
#         app.config['SECRET_KEY'] = 'key'
#         self.client = app.test_client()

#         with self.client as c:
#             with c.session_transaction() as sess:
#                 sess['user_id'] = 1

#     def test_important_page(self):
#         """Test important page."""

#         result = self.client.get("/important")
#         self.assertIn(b"You are a valued user", result.data)


# class FlaskTestsLoggedOut(TestCase):
#     """Flask tests with user logged in to session."""

#     def setUp(self):
#         """Stuff to do before every test."""

#         app.config['TESTING'] = True
#         self.client = app.test_client()

#     def test_important_page(self):
#         """Test that user can't see important page when logged out."""

#         result = self.client.get("/important", follow_redirects=True)
#         self.assertNotIn(b"You are a valued user", result.data)
#         self.assertIn(b"You must be logged in", result.data)


# class FlaskTestsLogInLogOut(TestCase):  # Bonus example. Not in lecture.
#     """Test log in and log out."""

#     def setUp(self):
#         """Before every test"""

#         app.config['TESTING'] = True
#         self.client = app.test_client()

#     def test_login(self):
#         """Test log in form.

#         Unlike login test above, 'with' is necessary here in order to refer to session.
#         """

#         with self.client as c:
#             result = c.post('/login',
#                             data={'user_id': '42', 'password': 'abc'},
#                             follow_redirects=True
#                             )
#             self.assertEqual(session['user_id'], '42')
#             self.assertIn(b"You are a valued user", result.data)

#     def test_logout(self):
#         """Test logout route."""

#         with self.client as c:
#             with c.session_transaction() as sess:
#                 sess['user_id'] = '42'

#             result = self.client.get('/logout', follow_redirects=True)

#             self.assertNotIn(b'user_id', session)
#             self.assertIn(b'Logged Out', result.data)



if __name__ == "__main__":
    import unittest
    connect_to_db(app, db_uri='postgresql:///testdb', echo=False)

    unittest.main()
