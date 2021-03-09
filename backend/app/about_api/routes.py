from flask import Blueprint, render_template, request, redirect, url_for, json, jsonify

from app.about_api.models import About
from app.about_api.forms import AboutForm, DeleteForm

from app import db

about = Blueprint(
    'about', 
    __name__,
    template_folder='templates'
)



@about.route("/", methods=['GET', 'POST', 'PATCH'])
def index():
    
    if request.method == "POST":
        form = AboutForm(request.form)
        if form.validate():
            new_about = About(request.form['title'], request.form['description'])
            db.session.add(new_about)
            db.session.commit()
            return redirect(url_for('about.index'))
        
        return jsonify({
            'id': new_about.id,
            'title': new_about.title,
            'description': new_about.description
        })
        # return render_template('about-new.html', form=form)

    # return jsonify([
    #     {
    #         'id': about_object.id, 
    #         'title': about_object.title, 
    #         'description': about_object.description
    #     }
    #     for about_object in About.query.all()
    # ])

    return render_template('index.html', about=About.query.all()) # fetch all data and display


@about.route("/about-us", methods=['GET'])
def about_page():
    return ("This is about us page")


@about.route('/new')
def new():
    form = AboutForm()
    return render_template('about-new.html', form=form)


@about.route('/<int:id>/edit', methods=["GET", "POST"])
def edit(id):
    about=About.query.get(id)
    form = AboutForm(obj=about)

    if request.method == "POST":
        about.title = request.form['title']
        about.description = request.form['description']
        db.session.add(about)
        db.session.commit()
        return redirect(url_for('about.index'))

    return render_template('about-edit.html', form=form, about=about)


@about.route('/<int:id>/delete', methods =["GET", "POST"])
def delete(id):
    about=About.query.get(id)
    if request.method == "POST":
        # form = DeleteForm(request.form)
        # if form.validate():
        db.session.delete(about)
        db.session.commit()
        return redirect(url_for('about.index'))
    return render_template('index.html', about=About.query.all())
