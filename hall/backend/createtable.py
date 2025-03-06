from database import engine, Base
from models import User, Inquiries, Event

print("Creating tables in the database...")
Base.metadata.create_all(bind=engine)
print("Tables created successfully!")
