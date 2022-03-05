from flask import Blueprint, jsonify, request
from app.models import Image, db
from app.forms import FoamStatusForm

from flask_login import current_user

images_routes = Blueprint('image', __name__)

# @images_routes.route('/', methods=['GET'])
# def get_images():
  


