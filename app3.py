from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    # sleep(3)
    return 'Hello World!'


if __name__ == '__main__':
    app.run(port=5003)
