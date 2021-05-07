# from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(name='Demo',
                companyName='app academy',
                isVendor=True,
                summary='here is my summary',
                emailAddress='demo@aa.io',
                password='password')

    demo2 = User(name='Mr. Cool',
                companyName='Pipedrive',
                isVendor=True,
                summary='the best CRM ever made',
                emailAddress='cool@pipedrive.io',
                password='password')

    demo3 = User(name='Elon Musk',
                companyName='Tesla',
                isVendor=False,
                summary='Looking for CRM & Accounting software',
                emailAddress='elon@tesla.io',
                password='password')

    userSeedList = [demo, demo2, demo3]

    db.session.add_all(userSeedList)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
