from flask import (Flask, render_template, request, redirect)
from model import connect_to_db
from datetime import datetime
import crud

app = Flask(__name__)

@app.route('/')
def homepage():
    """View page for React app"""

    return render_template('index.html')


@app.route('/<path>', methods=['GET', 'POST'])
def route(path):

    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        user = crud.get_user(email)

        print(user)

        return redirect('/')

    return render_template('index.html')


if __name__ == '__main__':
    from flask import Flask

    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)