from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import urllib.parse

password = urllib.parse.quote_plus("Dhanraj@16")  # Encodes special characters
SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://root:{password}@localhost:3306/jobboard"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()