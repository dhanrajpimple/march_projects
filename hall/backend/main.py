from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from auth import router as auth_router
from inquiry import router as inquiry_router
from event import router as event_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth")
app.include_router(event_router, prefix="/event")
app.include_router(inquiry_router, prefix="/inquiry")



@app.get("/")
def read_root():
    return {"message": "Try your best DP"}