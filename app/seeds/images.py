from app.models import db, Image
import json

# MOCK_IMAGES = "./mock_data/images.json"

MOCK_IMAGES = "./app/seeds/mock_data/images.json"

def load_mock_data():
  with open(MOCK_IMAGES) as file:
    images = json.load(file)
  return images

def seed_images():
  mock_data = load_mock_data()
  for mock_data in mock_data:
    new_image = Image(
      url=mock_data['url'],
      foamStatus='Uncategorized',
      lastModified=mock_data['lastModified'],
    )
    db.session.add(new_image)
  db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
