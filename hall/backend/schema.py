from pydantic import BaseModel
from typing import List, Optional, Any
import uuid
from datetime import datetime

class UserCreate(BaseModel):
    name:str
    email:str
    password:str
    


class Userresponse(BaseModel):
    data: any
    message:str
    status:bool

    class Config:
       from_attributes = True

class LoginRequest(BaseModel):
    email:str
    password:str

class InquiryCreate(BaseModel):
    name:str
    email:str
    phone:str
    message:str
    eventType:str
    eventDate:datetime

class EventsCreate(BaseModel):
    title:str
    type :str
    client_name : str
    client_email : str
    client_phone : str
    start_date : datetime
    end_date : datetime
    status : str
    amount: float
    deposit_status:  str
    notes : str
    