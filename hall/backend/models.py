from sqlalchemy import Column, Integer, String, DateTime, Enum, JSON, Float
from sqlalchemy.dialects.postgresql import UUID  # Use PostgreSQL-compatible UUID
from sqlalchemy.sql import func
from database import Base
import uuid
from sqlalchemy import Column, String, DateTime
from sqlalchemy.dialects.mysql import CHAR
from sqlalchemy.ext.declarative import declarative_base

class User(Base):
    __tablename__ = "users"
    id = Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    create_at = Column(DateTime, default=func.now())


class Inquiries(Base):
    __tablename__ = "inquiries"
    id = Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    phone = Column(String(255), nullable=True)
    message = Column(String(255), nullable=True)
    eventType = Column(Enum("wedding", "birthday", "corporate", "anniversary", "others", name="event_type"))
    eventDate = Column(DateTime, nullable=False)
    create_at = Column(DateTime, default=func.now())


class Event(Base):
    __tablename__ = "events"
    id = Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    title = Column(String(255), nullable=False)
    type = Column(String(255), nullable=False)
    client_name = Column(String(255), nullable=False)
    client_email = Column(String(255), nullable=False)
    client_phone = Column(String(255), nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)
    status = Column(String(255), nullable=False)
    amount = Column(Float, nullable=False)
    deposit_status = Column(String(255), nullable=False)
    notes = Column(String(255), nullable=True)
    create_at = Column(DateTime, default=func.now())
