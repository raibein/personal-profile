from app import db  # app refers to __init__.py

class User(db.Model):

    __tablename__ = "users"

    # columns
    id = db.Column(db.Integer, primary_key=True)
    about_title = db.Column(db.Text)
    about_content = db.Column(db.Text)

    def __init__(self, about_title):
        self.about_title = about_title