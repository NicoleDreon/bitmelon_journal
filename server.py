from flask import Flask, render_template
from backend.model import connect_to_db
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def homepage():
    """View page for React app"""

    return render_template('index.html')


@app.route('/<path>')
def route(path):

    return render_template('index.html')


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)