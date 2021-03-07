from unittest import TestCase

import requests


class TestFlaskApiUsingRequests(TestCase):
    def test_currency(self):
        response = requests.get('http://127.0.0.1:5000/api/currencies')
        self.assertEqual(response.status_code, 200)

    def test_execute(self):
        response = requests.get('http://127.0.0.1:5000/api/execute')
        self.assertEqual(response.status_code, 200)

    def test_post_currency(self):
        payload = {
            "firstCurrency": "USD",
            "secondCurrency": "CZK",
            "amount": 1000
        }
        response = requests.post('http://127.0.0.1:5000/api/currencies', json=payload)
        
        self.assertEqual(response.status_code, 200)
