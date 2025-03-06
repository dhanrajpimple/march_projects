from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from models import Event , User
from schema import EventsCreate
from datetime import datetime, timedelta
from typing import List
from auth import get_current_user


router = APIRouter()

@router.post("/inquiry")
def create_inquiry(inquiry: EventsCreate, current_user: User = Depends(get_current_user) ,db: Session = Depends(get_db)):
    inquiry = Event(
    title=inquiry.title,
    type=inquiry.type,
    client_name=inquiry.client_name,
    client_email=inquiry.client_email,
    client_phone=inquiry.client_phone,
    start_date=inquiry.start_date,
    end_date=inquiry.end_date,
    status=inquiry.status,
    amount=inquiry.amount,
    deposit_status=inquiry.deposit_status,
    notes=inquiry.notes,
    
    )
    db.add(inquiry)
    db.commit()
    return {"success": True, "message": "Event created successfully"}

@router.get("/inquiry")
def get_all_inquiries( current_user: User = Depends(get_current_user) ,db: Session = Depends(get_db)):
    inquiries = db.query(Event).all()
    return  {"success": True, "data": inquiries}

@router.get("/inquiry/{id}")
def get_inquiry_by_id(id: str, db: Session = Depends(get_db)):
    inquiry = db.query(Event).filter(Event.id == id).first()
    if not inquiry:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    return {"success": True, "data": inquiry}

@router.delete("/inquiry/{id}")
def delete_inquiry_by_id(id: str, current_user: User = Depends(get_current_user) ,db: Session = Depends(get_db)):
    inquiry = db.query(Event).filter(Event.id == id).first()
    if not inquiry:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    db.delete(inquiry)
    db.commit()
    return {"success": True, "message": "Inquiry deleted successfully"}

@router.put("/inquiry/{id}")
def update_inquiry_by_id(id: str,  inquiry: EventsCreate, current_user: User = Depends(get_current_user) , db: Session = Depends(get_db)):
    existing_inquiry = db.query(Event).filter(Event.id == id).first()
    if not existing_inquiry:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    existing_inquiry.title = inquiry.title
    existing_inquiry.type = inquiry.type
    existing_inquiry.client_name = inquiry.client_name
    existing_inquiry.client_email = inquiry.client_email
    existing_inquiry.client_phone = inquiry.client_phone
    existing_inquiry.start_date = inquiry.start_date
    existing_inquiry.end_date = inquiry.end_date
    existing_inquiry.status = inquiry.status
    existing_inquiry.amount = inquiry.amount
    existing_inquiry.deposit_status = inquiry.deposit_status
    existing_inquiry.notes = inquiry.notes
     # Optional, depends on if you want to overwrite

    db.commit()

    return {"success": True, "message": "Inquiry updated successfully"}

                                                                    

