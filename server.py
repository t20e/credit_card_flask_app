from flask import Flask, render_template, redirect, request
import os
from os.path import join, dirname
from dotenv import load_dotenv
import json

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path=dotenv_path)

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')

formData = []


@app.route('/')
def home():
    return render_template('index.html')


@app.route("/form", methods=['POST'])
def form():
    data = {
        'firstName': request.form['firstName'],
        'lastName': request.form['lastName'],
        'email': request.form['email'],
        'DOB': request.form['DOB'],
    }
    print(data)
    formData.append(data)
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True, port=4400)
