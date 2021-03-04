from flask import Blueprint, render_template

about = Blueprint('about', __name__)

@about.route("/")
def index_page():
    return render_template('index.html')


@about.route("/about", methods=['GET'])
def about_page():
    return ("This is about us page")