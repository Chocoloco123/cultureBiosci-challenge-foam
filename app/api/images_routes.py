from flask import Blueprint, jsonify, request
from app.models import Image, db
from app.forms import FoamStatusForm
from datetime import datetime

from flask_login import current_user

images_routes = Blueprint('image', __name__)

# @images_routes.route('/', methods=['GET'])
# def get_images():
  
@images_routes.route('/<int:pageNumber>', methods=['GET'])
def paginated_images(pageNumber):
  IMAGES_PER_PAGE = 18
  images = Image.query.paginate(pageNumber, IMAGES_PER_PAGE, False)

  # print('here!!!!!!!!')
  if images:
    images = dict([(image.id, image.to_dict()) for image in images.items])
    # print(images)
    return images
  else:
    return {'message' : 'No images found.'}

# @images_routes.route('/<int:pageNumber>/<int:id>/update', methods=['GET', 'PUT'])
# def update_image_status(pageNumber, id):
#   form = FoamStatusForm()
#   form['csrf_token'.data] = request.cookies('csrf_token')
#   image = Image.query.get(id)

#   if form.validate_on_submit():
#     image.url = form.data['url']
#     image.foamStatus = form.data['foamStatus']
#     image.lastModified = datetime.now()

#     db.session.commit()
#     return image.to_dict()
#   else:
#     return {"message" : "Unable to update foam status."}


@images_routes.route('/<int:id>/update', methods=['GET', 'PUT'])
def update_image_status(pageNumber, id):
  form = FoamStatusForm()
  form['csrf_token'.data] = request.cookies('csrf_token')
  image = Image.query.get(id)

  if form.validate_on_submit():
    image.url = form.data['url']
    image.foamStatus = form.data['foamStatus']
    image.lastModified = datetime.now()

    db.session.commit()
    return image.to_dict()
  else:
    return {"message": "Unable to update foam status."}


