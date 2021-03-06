from flask import Blueprint, jsonify, request
from app.models import Image, db
from app.forms import FoamStatusForm
from datetime import datetime

from flask_login import current_user

images_routes = Blueprint('image', __name__)

@images_routes.route('/<int:id>', methods=['GET'])
def get_one_image(id):
  image = Image.query.get(id)
  if image:
    image = image.to_dict()
  
    return image
  else:
    return {'message':'Image not found.'}
  
@images_routes.route('/all/<int:pageNumber>', methods=['GET'])
def paginated_images(pageNumber):
  IMAGES_PER_PAGE = 18
  images = Image.query.order_by(Image.id) \
    .paginate(pageNumber, IMAGES_PER_PAGE, False) \
    # .sort_by(id)
    # .order_by(Image.id)
    # .filter(Image.id)

  # print('here!!!!!!!!')
  if images:
    images = dict([(image.id, image.to_dict()) for image in images.items])
    
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
def update_image_status(id):
  form = FoamStatusForm()
  # form['csrf_token'.data] = request.cookies('csrf_token')
  image = Image.query.get(id)
  
  if image:
    # image.url = form.data['url']
    image.foamStatus = form.data['foamStatus']
    # image.lastModified = datetime.now()
    image.lastModified = form.data['lastModified']
    # form.populate_obj(image)

    db.session.commit()
    # print('image to update: --------> ', image.to_dict())
    return image.to_dict()
  else:
    return {"message": "Unable to update foam status."}


@images_routes.route('/categories/foam/<int:pageNumber>', methods=['GET'])
def get_foam_images_paginated(pageNumber):
  IMAGES_PER_PAGE = 18
  images = Image.query \
    .filter(Image.foamStatus == 'Foam') \
    .paginate(pageNumber, IMAGES_PER_PAGE, False)

  # print('here!!!!!!!!')
  if images:
    images = dict([(image.id, image.to_dict()) for image in images.items])
    # print(images)
    return images
  else:
    return {'message': 'No images found.'}


@images_routes.route('/categories/no_foam/<int:pageNumber>', methods=['GET'])
def get_no_foam_images_paginated(pageNumber):
  IMAGES_PER_PAGE = 18
  images = Image.query \
      .filter(Image.foamStatus == 'No Foam') \
      .paginate(pageNumber, IMAGES_PER_PAGE, False)

  # print('here!!!!!!!!')
  if images:
    images = dict([(image.id, image.to_dict()) for image in images.items])
    # print(images)
    return images
  else:
    return {'message': 'No images found.'}


@images_routes.route('/categories/uncategorized/<int:pageNumber>', methods=['GET'])
def get_uncategorized_images_paginated(pageNumber):
  IMAGES_PER_PAGE = 18
  images = Image.query \
      .filter(Image.foamStatus == 'Uncategorized') \
      .paginate(pageNumber, IMAGES_PER_PAGE, False)

  # print('here!!!!!!!!')
  if images:
    images = dict([(image.id, image.to_dict()) for image in images.items])
    # print(images)
    return images
  else:
    return {'message': 'No images found.'}
