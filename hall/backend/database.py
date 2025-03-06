from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from urllib.parse import quote
import os

# Load environment variables
load_dotenv()

# Get values from environment variables
ROOT = os.getenv("ROOT")
PASSWORD = os.getenv("PASSWORD")
DATABASE = os.getenv("DATABASE")
HOST = os.getenv("HOST")
PORT = os.getenv("PORT")

# Encode the password to handle special characters like '@'
encoded_password = quote(PASSWORD)

# Construct the Database URL
DATABASE_URL = f"mysql+pymysql://{ROOT}:{encoded_password}@{HOST}:{PORT}/{DATABASE}"

# Create the engine
engine = create_engine(DATABASE_URL, echo=True)  # Set echo=True to see SQL logs

# Create session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for ORM models
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Ensure tables are created
Base.metadata.create_all(bind=engine)
print("Tables created successfully!")
