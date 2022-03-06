from flask import Blueprint, jsonify, request
from app.models import Image, db
from app.forms import FoamStatusForm

from flask_login import current_user

images_routes = Blueprint('image', __name__)

# @images_routes.route('/', methods=['GET'])
# def get_images():
  
@images_routes.route('/images/page/<int:pageNumber>', methods=['GET'])
def paginated_images(pageNumber):
  IMAGES_PER_PAGE = 20
  images = Image.query.paginate(pageNumber, IMAGES_PER_PAGE, False);
  if images:
    images = {image.id : image.to_dict() for image in images}
    return images
  else:
    return {'message' : 'No images found.'}


