import time
import os
import unittest  
from server import app
from tests import test_data
from test_model import connect_to_db, db 
from selenium import webdriver  
from selenium.webdriver.chrome.options import Options, select

chrome_options = Options()  
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")   

browser = webdriver.Chrome(executable_path=os.path.abspath("chromedriver"),
                           options=chrome_options)


class bitMelonJournal(unittest.TestCase):
    """testing user input to login"""

    def setUp(self):
        """Stuff to do before every test."""

        app.config['TESTING'] = True

        connect_to_db(app, "postgresql:///testdb")

        db.create_all()
        test_data()   

        self.browser = webdriver.Chrome(executable_path=os.path.abspath("chromedriver"), 
                                        options=chrome_options)


    def tearDown(self):
        self.browser.quit()

        db.session.close()
        db.drop_all()


    def login(self):
        self.browser.get('http://localhost:5000/login')


        email = self.browser.find_element_by_id('email')
        email.send_keys("carolt@gmail.com")#need to update with test data
        password = self.browser.find_element_by_id('password')
        password.send_keys("t2455xx")

        btn = self.browser.find_element_by_xpath("//button[@type='submit']")
        btn.click()

        time.sleep(1)

        

    def test_login(self):

        self.login()
        result = self.browser.find_element_by_tag_name('h1')
        self.assertTrue('CarolT' in result.text)

           

# for journal call self.login()


def test_journalEntry(self):

        self.browser.get('http://localhost:5000/login')

        self.login()
        #driver or browser
        melon_select = Select(browser.find_element_by_id('melon_name'))
        melon_select.select_by_value('Pepino – Solanum muricatum')
        # melon_name= self.browser.find_element_by_id('melon_name')
        # need to click drop down -Pepino – Solanum muricatum
        rating = self.browser.find_element_by_id('rating')
        rating.send_keys("5")
        tasting_notes = self.browser.find_element_by_id('entry')
        tasting_notes.send_keys("The best melon I have ever tasted")
        favorite_select = Select(browser.find_element_by_id('favorite'))
        favorite_select.select_by_value('Yes')
        #need to be able to select drop down option - should be true

        # btn = self.browser.find_element_by_xpath("//button[@type='submit']")
        # #need id on create entry
        # btn.click()

        # time.sleep(1)



        #there is no change on page- don't know how to assert changes 
        # result = self.browser.find_element_by_id('userprofile_header')
        # self.assertEqual(result.text, "Sameea")

#             

# #melonmemory

# class TestMelonMemory(unittest.TestCase):

#     def setUp(self):
#         self.browser = webdriver.Chrome(executable_path=os.path.abspath("chromedriver"), 
#                                         options=chrome_options)

#     def tearDown(self):
#         self.browser.quit()

#     def test_login(self):
#             self.browser.get('http://localhost:5000/login')

#             #need adress of user when logged in, and need to be able to reference
#             #journal entry of user

#             journal_name= self.browser.find_element_by_id('journal_name')
#             # need to click drop down of options for particular user
#             location = self.browser.find_element_by_id('location')
#             location.send_keys("Southfield, MI")
#             memory = self.browser.find_element_by_id('memory')
#             memory.send_keys("Ate the melon with friends")
#             date = self.browser.find_element_by_id('date')
#             date.send_keys("05262021")
#             #need to be able to select date from calendar?
#             friend = self.browser.find_element_by_id('friend)
#             friend.send_keys("Queentesa")

#             btn = self.browser.find_element_by_id('')
#             #need id on create entry
#             btn.click()

#             time.sleep(1)

#             #there is no change on page- don't know how to assert changes 
#             #when have to open memory to view changes 
#             # result = self.browser.find_element_by_id('userprofile_header')
#             # self.assertEqual(result.text, "Sameea")

#             


# class TestMelonjournal(unittest.TestCase):

#     def setUp(self):
#         self.browser = webdriver.Chrome(executable_path=os.path.abspath("chromedriver"), 
#                                         options=chrome_options)

#     def tearDown(self):
#         self.browser.quit()

#TODO NOT WORKING 
    # def test_homepage(self):
    #     self.browser.get('http://localhost:5000/')
    #     self.assertEqual(result.text, 'testing login')
          
    # def test_login(self):
    #     self.browser.get('http://localhost:5000/login')
    #     self.assertEqual(result.text, 'Login')

    # def test_allmelons(self):
    #     self.browser.get('http://localhost:5000/allmelons')
    #     self.assertEqual(result.text, 'Citrullus caffer')
        
    # def test_userprofile(self):
    #     self.browser.get('http://localhost:5000/userprofile')
    #     self.assertEqual(result.text, 'melons tried')


if __name__ == "__main__":
  
    unittest.main()