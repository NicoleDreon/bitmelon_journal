from flask import Flask
from model import connect_to_db
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def homepage():
    """View page for React app"""

    return render_template('main.html')


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)