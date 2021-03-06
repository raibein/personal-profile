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

    # with app.app_context():
    #     from . import routes  # Import routes
    #     db.create_all()  # Create sql tables for our data models


    from app.about_api.routes import about
    from app.currency_conversion_api.routes import conversion

    # app.register_blueprint(about, url_prefix='/about')    # We can use prefex so every of the model name start from that
    app.register_blueprint(about)
    app.register_blueprint(conversion, url_prefix='/api')
    
    # app.run(debug=True)
    return app