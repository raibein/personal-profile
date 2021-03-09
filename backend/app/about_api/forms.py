from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired

class AboutForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    description = TextAreaField('description')

class DeleteForm(FlaskForm):
    pass