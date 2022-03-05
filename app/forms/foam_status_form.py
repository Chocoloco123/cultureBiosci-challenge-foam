from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField
from wtforms.validators import DataRequired


class FoamStatusForm(FlaskForm):
  url = StringField('url', validators=[DataRequired()])
  foamStatus = StringField('foamStatus', validators=[DataRequired()])
  lastModified = DateTimeField('lastModified', validators=[DataRequired()])