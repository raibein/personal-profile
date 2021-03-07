from flask import Flask
from app.config import config

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

import flask_monitoringdashboard as dashboard


db = SQLAlchemy()

def create_app(app_config='development'):
    
    app = Flask(__name__)

    app.config.from_object(config[app_config])

    db.init_app(app)
    migrate = Migrate(app, db)

    dashboard.bind(app)

    from app.about_api.routes import about
    from app.currency_conversion_api.routes import conversion

    app.register_blueprint(about)
    app.register_blueprint(conversion, url_prefix='/api')
    
    return app
