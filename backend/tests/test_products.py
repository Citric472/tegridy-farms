from decimal import Decimal

from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_root():
    response = client.get("/")

    assert response.status_code == 200
    assert response.json()["status"] == "running"


def test_health_check():
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json()["status"] == "healthy"


def test_get_products():
    response = client.get("/api/products")

    assert response.status_code == 200

    products = response.json()

    assert isinstance(products, list)


def test_get_products_with_limit():
    response = client.get(
        "/api/products",
        params={"limit": 2},
    )

    assert response.status_code == 200

    products = response.json()

    assert len(products) <= 2


def test_get_products_by_category():
    response = client.get(
        "/api/products",
        params={"category": "accessory"},
    )

    assert response.status_code == 200

    products = response.json()

    for product in products:
        assert product["category"] == "accessory"


def test_get_product_not_found():
    response = client.get("/api/products/999999")

    assert response.status_code == 404
    assert response.json()["detail"] == "Product not found"
