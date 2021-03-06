from app import db  # app refers to __init__.py

class User(db.Model):

    __tablename__ = "users"

    # columns
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    password = db.Column(db.Text)

    def __init__(self, name):
        self.name = name