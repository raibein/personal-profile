# basedir = os.path.abspath(os.path.dirname(__file__))

"""Flask configuration variables."""
import os
from os import environ, path
from dotenv import load_dotenv


basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))


class Config(object):
    TESTING=False
    DEBUG=False
    
    SECRET_KEY = os.environ.get('SECRET_KEY')

    SQLALCHEMY_ECHO = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
    DEBUG=True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')

class TestingConfig(Config):
    TESTING=True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')

class ProductionConfig(Config):
    DEBUG=False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')


config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}