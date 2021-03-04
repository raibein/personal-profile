from app import db

class About(db.Model):
    __tablename__ = 'tbl_about'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text)
    description = db.Column(db.Text)

    def __init__(self, title, description):
        self.title = title
        self.description = description
