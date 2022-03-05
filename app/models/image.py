from .db import db
from sqlalchemy.sql import func

class Image(db.Model):
  __tablename__ = 'images'

  id = db.Column(db.Integer, primary_key=True)
  url = db.Column(db.String, nullable=False)
  foamStatus = db.Column(db.String, nullable=True)
  lastModified = db.Column(db.DateTime(timezone=True),server_default=func.now())

  def to_dict(self):
    return {
      "id": self.id,
      "url": self.url,
      "foamStatus": self.foamStatus,
      "lastModified": self.lastModified
    }