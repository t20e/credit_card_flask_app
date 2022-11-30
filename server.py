from flask import Flask, render_template
import os
from os.path import join, dirname
from dotenv import load_dotenv
import json

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path=dotenv_path)

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')

# scrollAnimationFile = open('./static/assets/animations/mouse_scroll.json')
# scrollAnimation = json.load(scrollAnimationFile)

@app.route('/')
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run( debug=True)
