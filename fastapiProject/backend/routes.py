from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from models import Job
from database import SessionLocal, get_db
from schemas import JobCreate, JobResponse  # Import Pydantic schemas

router = APIRouter()

# ... (get_db dependency remains the same)

@router.post("/jobs/", response_model=JobResponse)
def create_job(job: JobCreate, db: Session = Depends(get_db)):
    db_job = Job(**job.dict())  # Convert Pydantic model to SQLAlchemy model
    db.add(db_job)
    db.commit()
    db.refresh(db_job)
    return db_job

@router.get("/jobs/", response_model=list[JobResponse])
def read_jobs(db: Session = Depends(get_db)):
    jobs = db.query(Job).all()
    return jobs  # FastAPI auto-converts SQLAlchemy models to Pydantic models via `orm_mode`

@router.delete("/jobs/{job_id}")
def delete_job(job_id: int, db: Session = Depends(get_db)):
    db_job = db.query(Job).filter(Job.id == job_id).first()
    if db_job is None:
        raise HTTPException(status_code=404, detail="Job not found")
    db.delete(db_job)
    db.commit()
    return {"message": "Job deleted successfully"}