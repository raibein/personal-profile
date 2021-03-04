from flask import Flask
from app.config import config

def create_app(app_config='development'):
    app = Flask(__name__)
    # app.run(debug=True)
    app.config.from_object(config[app_config])

    from app.about_api.routes import about

    app.register_blueprint(about)
    
    return app