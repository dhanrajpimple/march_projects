from sqlalchemy import Column, Integer, String, Text
from database import Base

class Job(Base):
    __tablename__ = "jobs"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100))
    description = Column(Text)
    company = Column(String(50))
    location = Column(String(50))
    salary = Column(String(20))