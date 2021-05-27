import time
import os
import unittest  
from server import app
from tests import test_data
from test_model import connect_to_db, db 
from selenium import webdriver  
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import Select

chrome_options = Options()  
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")   

browser = webdriver.Chrome(executable_path=os.path.abspath("chromedriver"),
                           options=chrome_options)


class bitMelonJournal(unittest.TestCase):
    """testing login, journal entry and memory entry"""

    def setUp(self): #working
        """Stuff to do before every test."""

        app.config['TESTING'] = True

        connect_to_db(app, "postgresql:///testdb")

        db.create_all()
        test_data()   

        self.browser = webdriver.Chrome(executable_path=os.path.abspath("chromedriver"), 
                                        options=chrome_options)


    def tearDown(self):#working 
        self.browser.quit()

        db.session.close()
        db.drop_all()


    def login(self): #working

        self.browser.get('http://localhost:5000/login')

        email = self.browser.find_element_by_id('email')
        email.send_keys("carolt@gmail.com")#need to update with test data
        password = self.browser.find_element_by_id('password')
        password.send_keys("t2455xx")

        btn = self.browser.find_element_by_xpath("//button[@type='submit']")
        btn.click()

        time.sleep(1)

        
    def test_login(self): #working

        self.login()

        result = self.browser.find_element_by_tag_name('h6')
        self.assertTrue('carolt@gmail.com' in result.text)

      
    def test_journalEntry(self): 

        self.login()
        time.sleep(1)

        btn = self.browser.find_element_by_id("createJournal")
        btn.click()
        time.sleep(1)
  
        melon_select = Select(self.browser.find_element_by_name('melon_name'))
        melon_select.select_by_value('Pepino – Solanum muricatum')

        rating = self.browser.find_element_by_id('rating')
        rating.send_keys("5")

        tasting_notes = self.browser.find_element_by_id('entry')
        tasting_notes.send_keys("The best melon I have ever tasted")

        favorite_select = Select(self.browser.find_element_by_id('favorite'))
        favorite_select.select_by_value('True')

        btn = self.browser.find_element_by_id("journalSubmit")
        btn.click()
        time.sleep(1)

        btn = self.browser.find_element_by_id("JournalShow")
        btn.click()
        time.sleep(1)

        result = self.browser.find_element_by_tag_name('h2')
        self.assertTrue('Pepino' in result.text)


    def test_melonMemory(self):

        self.login()
        time.sleep(1)

        btn = self.browser.find_element_by_id("createMemory")
        btn.click()
        time.sleep(1)

        journal_name_select = Select(self.browser.find_element_by_name('journal_name'))
        journal_name_select.select_by_visible_text('Pepino – Solanum muricatum')
    #working up until here-
  
        location = self.browser.find_element_by_id('location')
        location.send_keys("Upper P, Michigan")
    #     memory = self.browser.find_element_by_id('memory')
    #     memory.send_keys("Still the best melon I ever tasted")
    #     date = self.browser.find_element_by_id('date')
    #     date.send_keys("05262021")
    #     #need to be able to select date from calendar?
    #     friend = self.browser.find_element_by_id('friend)
    #     friend.send_keys("Sherry")

#             btn = self.browser.find_element_by_id('')
#             #need id on create entry
#             btn.click()

#             time.sleep(1)

#             #there is no change on page- don't know how to assert changes 
#             #when have to open memory to view changes 
#             # result = self.browser.find_element_by_id('userprofile_header')
#             # self.assertEqual(result.text, "Sameea")



if __name__ == "__main__":
  
    unittest.main()