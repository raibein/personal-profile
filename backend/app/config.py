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
    
    # SECRET_KEY = os.environ.get('SECRET_KEY')
    # MAIL_SERVER = os.environ.get('MAIL_SERVER', 'smtp.googlemail.com')
    # MAIL_PORT = int(os.environ.get('MAIL_PORT', '587'))
    # MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS', 'true').lower() in ['true', 'on', '1']
    # MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    # ENV_MAIL_SUBJECT_PREFIX = '[Envelopes]'
    # ENV_MAIL_SENDER = 'Envelopes Admin <EnvelopesTheApp@gmail.com>'
    # ENV_ADMIN = os.environ.get('ENV_ADMIN')
    
    SQLALCHEMY_ECHO = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
    DEBUG=True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')

class TestingConfig(Config):
    TESTING=True
    # SQLALCHEMY_DATABASE_URI = os.environ.get('TEST_DATABASE_URL') or 'sqlite://'

class ProductionConfig(Config):
    pass
    # SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'data.sqlite')


config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}