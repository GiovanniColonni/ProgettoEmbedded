from flask import Flask, g, request
from flask_restx import Api, Resource
from pony.flask import example
from flask_login import login_required
from config import SECRET_KEY, FLASK_HOST
from db.queries.InsertQuery import InsertQuery
from db.queries.SelectQuery import SelectQuery

from db.queries.UpdateQuery import UpdateQuery


app = Flask(__name__)
app.config.from_object(__name__)

api = Api(app=app, title="HealthSystem")

app.secret_key = SECRET_KEY
app.config['REMEMBER_COOKIE_HTTPONLY'] = True



with app.app_context():
    from blueprint.auth import auth
    from blueprint.doctor import doctor
    from blueprint.account import account
    
app.register_blueprint(account)
app.register_blueprint(auth)
app.register_blueprint(doctor)

# togliere
@app.teardown_appcontext
def teardown_db(exe):
    db = g.pop('db', None)
    if db is not None:
        # qui chiudere connessione al db
        pass
# togliere

@api.route("/updateType")
class ChangeType(Resource):
    # questo serve soltanto a fare l'update del tipo di user

    @login_required
    def post(self):
        userId = request.form.get("googleId")
        userType = request.form.get("userType")

        print(userId)
        print(userType)
        UpdateQuery.updateUserType(userId)

        return "OK", 200

if __name__ == "__main__":
    app.run(host=FLASK_HOST,ssl_context='adhoc')