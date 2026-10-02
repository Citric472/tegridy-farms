from decimal import Decimal

from faker import Faker

from app.db.database import SessionLocal
from app.models.product import Product


fake = Faker()

PRODUCTS = [
    {
        "name": "Tegridy OG Weed",
        "category": "weed",
        "price": Decimal("45.00"),
        "image_url": "/assets/og.jpg",
    },
    {
        "name": "Sativa Sunrise Weed",
        "category": "weed",
        "price": Decimal("40.00"),
        "image_url": "/assets/sativa-sunrise.jpg",
    },
    {
        "name": "Rolling Papers Pack",
        "category": "accessory",
        "price": Decimal("8.00"),
        "image_url": "/assets/rolling-papers.jpg",
    },
    {
        "name": "Tegridy Grinder",
        "category": "accessory",
        "price": Decimal("25.00"),
        "image_url": "/assets/grinder.jpeg",
    },
]


def seed_products():
    db = SessionLocal()

    try:
        created = 0
        updated = 0

        for product_data in PRODUCTS:
            product = (
                db.query(Product)
                .filter(Product.name == product_data["name"])
                .first()
            )

            if product:
                product.category = product_data["category"]
                product.price = product_data["price"]
                product.image_url = product_data["image_url"]
                product.is_active = True

                if not product.description:
                    product.description = fake.text(
                        max_nb_chars=120
                    )

                updated += 1

            else:
                product = Product(
                    name=product_data["name"],
                    description=fake.text(max_nb_chars=120),
                    price=product_data["price"],
                    category=product_data["category"],
                    image_url=product_data["image_url"],
                    is_active=True,
                )

                db.add(product)
                created += 1

        db.commit()

        print(f"Created: {created}")
        print(f"Updated: {updated}")
        print("Product seeding completed successfully.")

    except Exception:
        db.rollback()
        raise

    finally:
        db.close()


if __name__ == "__main__":
    seed_products()
