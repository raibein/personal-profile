from flask import Blueprint, request, jsonify, json
from flask_restful import Api, Resource

from celery import Celery
# import time

import requests



conversion = Blueprint(
    'conversion', 
    __name__
)

conversion_api = Api(conversion)


url = "https://api.exchangeratesapi.io/latest"

'''
API Example without using class
===============================

@conversion.route('/currencies')
def fetch_currencies():
        url = "https://api.exchangeratesapi.io/latest"
        body = {"query": {"match_all": {}}}
        headers = {"Content-type": "application/json"}
        r = requests.get(url=url, json=body, headers=headers)
        json_data = json.loads(r.text)
        return json_data['rates']
'''






# def create_celery_app(app=None):

#     from app import create_app

#     app = app or create_app()

#     # Create the celery and set the broker location (RabbitMQ)
#     celery = Celery('routes',
#              backend='rpc://',
#              broker='amqp://guest:guest@localhost:5672//'
#         )
    
#     # celery.conf.update(app.config)
    
#     TaskBase = celery.Task

#     class ContextTask(TaskBase):
#         abstract = True

#         def __call__(self, *args, **kwargs):
#             with app.app_context():
#                 return TaskBase.__call__(self, *args, **kwargs)

#     celery.Task = ContextTask
#     return celery





# Create the celery and set the broker location (RabbitMQ)
celery = Celery('routes',
             backend='rpc://',
             broker='amqp://guest:guest@localhost:5672//',
             include=['routes']
        )

@celery.task()
def celery_task():
    return 'raben'[::-1]


@conversion.route('/execute')
def execute_task():
    celery_task.delay()
    return "success celery task"


@conversion_api.resource('/currencies')
class CurrenciesAPI(Resource):
    def get(self):
        body = {"query": {"match_all": {}}}
        headers = {"Content-type": "application/json"}
        r = requests.get(url=url, json=body, headers=headers)
        json_data = json.loads(r.text)
        json_data = json_data['rates']
        return ([{"rate": json_data, "status": 200}])

    
    def post(self):
        body = {"query": {"match_all": {}}}
        headers = {"Content-type": "application/json"}
        r = requests.get(url=url, json=body, headers=headers)
        json_data = json.loads(r.text)

        json_data = json_data['rates']

        data = request.get_json()

        fistCurrency = data["firstCurrency"]
        secondCurrency = data["secondCurrency"]
        amount = data["amount"]
                    
        firstValue = json_data[fistCurrency]
        secondValue = json_data[secondCurrency]
        result = (secondValue/firstValue)*float(amount)

        return ({
            fistCurrency: firstValue,
            secondCurrency: secondValue,
            "amount": amount,
            "result": result,
            "remarks": fistCurrency + ' to ' + secondCurrency,
            "status": 200
        })
