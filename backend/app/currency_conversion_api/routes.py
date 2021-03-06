from flask import Flask, Blueprint, request, jsonify, make_response, json
from flask_restful import Api, Resource

import requests


app = Flask(__name__)


conversion = Blueprint(
    'conversion', 
    __name__
)

conversion_api = Api(conversion)


url = "https://api.exchangeratesapi.io/latest"

'''
API Example without using class
===============================
# @conversion.route('/currencies')
# def get():
#         url = "https://api.exchangeratesapi.io/latest"
#         body = {"query": {"match_all": {}}}
#         headers = {"Content-type": "application/json"}
#         r = requests.get(url=url, json=body, headers=headers)
#         json_data = json.loads(r.text)
#         return json_data['rates']
'''

@conversion_api.resource('/currencies')
class CurrenciesAPI(Resource):
    def get(self):
        body = {"query": {"match_all": {}}}
        headers = {"Content-type": "application/json"}
        r = requests.get(url=url, json=body, headers=headers)
        json_data = json.loads(r.text)
        return json_data['rates']

    
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
            "remarks": fistCurrency + ' to ' + secondCurrency
        })
