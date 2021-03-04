from flask import Blueprint, render_template

about = Blueprint('about', __name__)



@about.route("/", methods=['GET'])
def index():
    return render_template('index.html')


@about.route("/about", methods=['GET'])
def about_page():
    return ("This is about us page")