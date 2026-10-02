from datetime import datetime
from decimal import Decimal

from pydantic import BaseModel, ConfigDict, Field


class ProductBase(BaseModel):
    name: str = Field(
        ...,
        min_length=2,
        max_length=150,
    )

    description: str | None = Field(
        default=None,
        max_length=2000,
    )

    price: Decimal = Field(
        ...,
        gt=0,
        decimal_places=2,
    )

    category: str = Field(
        ...,
        min_length=2,
        max_length=50,
    )

    image_url: str | None = Field(
        default=None,
        max_length=500,
    )

    is_active: bool = True


class ProductCreate(ProductBase):
    pass


class ProductUpdate(BaseModel):
    name: str | None = Field(
        default=None,
        min_length=2,
        max_length=150,
    )

    description: str | None = Field(
        default=None,
        max_length=2000,
    )

    price: Decimal | None = Field(
        default=None,
        gt=0,
        decimal_places=2,
    )

    category: str | None = Field(
        default=None,
        min_length=2,
        max_length=50,
    )

    image_url: str | None = Field(
        default=None,
        max_length=500,
    )

    is_active: bool | None = None


class ProductResponse(ProductBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)