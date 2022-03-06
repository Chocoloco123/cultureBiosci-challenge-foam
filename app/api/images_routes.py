from flask import Blueprint, jsonify, request
from app.models import Image, db
from app.forms import FoamStatusForm

from flask_login import current_user

images_routes = Blueprint('image', __name__)

# @images_routes.route('/', methods=['GET'])
# def get_images():
  
@images_routes.route('/<int:pageNumber>', methods=['GET'])
def paginated_images(pageNumber):
  IMAGES_PER_PAGE = 20
  images = Image.query.paginate(pageNumber, IMAGES_PER_PAGE, False)

  # print('here!!!!!!!!')
  if images:
    images = dict([(image.id, image.to_dict()) for image in images.items])
    # print(images)
    return images
  else:
    return {'message' : 'No images found.'}


