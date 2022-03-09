from flask_wtf import FlaskForm
from wtforms import StringField, DateTimeField
from wtforms.validators import DataRequired


class FoamStatusForm(FlaskForm):
  url = StringField('url', validators=[DataRequired()])
  foamStatus = StringField('foamStatus', validators=[DataRequired()])
  lastModified = StringField('lastModified', validators=[DataRequired()]) 
  # maybe lastModified should be StringField or maybe Datefield...