import os
import unittest  
from selenium import webdriver  
from selenium.webdriver.chrome.options import Options  

chrome_options = Options()  
chrome_options.add_argument("--headless")
chrome_options.add_argument("--no-sandbox")   

browser = webdriver.Chrome(executable_path=os.path.abspath("chromedriver"),
                           options=chrome_options)

class TestLogin(unittest.TestCase):

    def setUp(self):
        self.browser = webdriver.Chrome(executable_path=os.path.abspath("chromedriver"), 
                                        options=chrome_options)

    def tearDown(self):
        self.browser.quit()

    def test_login(self):
            self.browser.get('http://localhost:5000/login')


            email = self.browser.find_element_by_id('email')
            email.send_keys("sameea@gmail.com")
            password = self.browser.find_element_by_id('password')
            password.send_keys("123")

            btn = self.browser.find_element_by_id('login_btn')
            btn.click()

            result = self.browser.find_element_by_id('userprofile_header')
            self.assertEqual(result.text, "Sameea")

            browser.quit()


class TestMelonjournal(unittest.TestCase):

    def setUp(self):
        self.browser = webdriver.Chrome(executable_path=os.path.abspath("chromedriver"), 
                                        options=chrome_options)

    def tearDown(self):
        self.browser.quit()

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