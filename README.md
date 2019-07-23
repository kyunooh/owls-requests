# owls-requests
Run each server
`python app.py & python app1.py & python app2.py & python app3.py`

Run with wsgi
`uwsgi --socket 0.0.0.0:5000 --protocol=http -w with_wsgi --workers 30`

Run each request
`node requests.js & node requests1.js & node requests2.js & node requests3.js`
