from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin

def run_server():
    app = Flask(__name__)
    CORS(app, support_credentials=True)
    response = [
        {
            "id": 0,
            "url": '/assets/icon/Left arrow.svg',
            "text": 'Left arrow',
            "active": True,
            "description": 'This is for everybody',
            "value": 'left',
        },
        {
            "id": 1,
            "url": '/assets/icon/Right Arrow.svg',
            "text": 'Right arrow',
            "active": True,
            "value": 'right',
            "description": "Duck rap, bustin' like an addict with a semi-automatic",
        },
        {
            "id": 2,
            "url": '/assets/icon/Up Arrow.svg',
            "text": 'Up arrow',
            "active": False,
            "value": 'up',
            "description": "Ain't no time to deny it, that is why we talking about it"
        },
        {
            "id": 3,
            "url": '/assets/icon/Down Arrow.svg',
            "text": 'Down arrow',
            "active": False,
            "value": 'down',
            "description": 'Just one letter'
        },
        {
            "id": 4,
            "url": '/assets/icon/spacebar.svg',
            "text": 'Spacebar',
            "active": False,
            "value": 'space',
            "description": 'Just one letter'
        },
        {
            "id": 5,
            "url": '/assets/icon/everything.gif',
            "text": 'Everything',
            "active": False,
            "value": 'everything',
            "description": 'What did it cost thanos?, i mean literally!!'
        }
    ]

    @app.route("/keycodes")
    @cross_origin(supports_credentials=True)
    def keycodes():
        return {
            'status': 'success',
            'data': response
        }

    print('running')
    app.run()
