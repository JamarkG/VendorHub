from app.models import db, Meeting


def seed_meetings():

    demoMeet1 = Meeting(
                sendUserId=1,
                recUserId=2,
                message='I would love to meet with you about a potential partnership',
                accepted=True
    )

    demoMeet2 = Meeting(
                sendUserId=3,
                recUserId=2,
                message='This looks so cool, I want a demo!',
                accepted=True
    )

    demoMeet3 = Meeting(
                sendUserId=2,
                recUserId=3,
                message='You need us!',
                accepted=False
    )

    userSeedList = [demoMeet1, demoMeet2, demoMeet3]

    db.session.add_all(userSeedList)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the meetings table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_meetings():
    db.session.execute('TRUNCATE meetings RESTART IDENTITY CASCADE;')
    db.session.commit()
