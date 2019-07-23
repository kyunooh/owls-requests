from flask import Flask

application = Flask(__name__)


@application.route('/')
def hello_world():
    # sleep(3)
    return 'Hello World!'


if __name__ == '__main__':
    application.run(host='0.0.0.0')
