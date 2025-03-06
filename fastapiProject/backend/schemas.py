
from pydantic import BaseModel

class JobCreate(BaseModel):
    title: str
    description: str
    company: str
    location: str
    salary: str

class JobResponse(JobCreate):
    id: int

    class Config:
        orm_mode = True  # Allows conversion from SQLAlchemy model to Pydantic model