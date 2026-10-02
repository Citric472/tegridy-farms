from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.products import router as products_router

app = FastAPI(
    title="Tegridy Farms API",
    description="Backend API for Tegridy Farms",
    version="1.0.0",
)

app.include_router(products_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Welcome to Tegridy Farms API",
        "status": "running",
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
    }