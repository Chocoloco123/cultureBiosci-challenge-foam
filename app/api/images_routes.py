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
    print('this is backend image:  ',image)
    return image
  else:
    return {'message':'Image not found.'}
  
@images_routes.route('/all/<int:pageNumber>', methods=['GET'])
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
def update_image_status(id):
  form = FoamStatusForm()
  # form['csrf_token'.data] = request.cookies('csrf_token')
  image = Image.query.get(id)
  print('image here: ===> ',image.to_dict())
  # if form.validate_on_submit():
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


