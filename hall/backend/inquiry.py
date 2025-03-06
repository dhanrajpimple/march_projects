from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from models import Inquiries, User
from schema import InquiryCreate
from datetime import datetime, timedelta
from typing import List
from auth import get_current_user
import uuid

router = APIRouter()


@router.post("/inquiry")

def create_inquiry(inquiry: InquiryCreate,   db: Session = Depends(get_db)):
    inquiry = Inquiries(name=inquiry.name, email=inquiry.email, phone=inquiry.phone, message=inquiry.message, eventType=inquiry.eventType, eventDate=inquiry.eventDate)
    db.add(inquiry)
    db.commit()
    return {"success": True, "message": "Inquiry created successfully"}
# Compare this snippet from backend/main.py:

@router.get("/inquiry")
def get_all_inquiries(db: Session = Depends(get_db)):
    inquiries = db.query(Inquiries).all()
    return  {"success": True, "data": inquiries}


@router.get("/inquiry/{id}")

def get_inquiry_by_id(id: str, current_user: User = Depends(get_current_user) , db: Session = Depends(get_db)):
    inquiry = db.query(Inquiries).filter(Inquiries.id == id).first()
    if not inquiry:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    return {"success": True, "data": inquiry}

@router.delete("/inquiry/{id}")
def delete_inquiry_by_id(id: str, current_user: User = Depends(get_current_user) , db: Session = Depends(get_db)):
    inquiry = db.query(Inquiries).filter(Inquiries.id == id).first()
    if not inquiry:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    db.delete(inquiry)
    db.commit()
    return {"success": True, "message": "Inquiry deleted successfully"}
# Compare this snippet from backend/main.py:
