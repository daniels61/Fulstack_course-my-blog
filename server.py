from flask import Flask
from settings import token
import requests
app = Flask(__name__)

@app.route('/')
def hello():
	return 'Hello World!'

@app.route('/weather/<city>')
def weather(city):
	url = "https://api.openweathermap.org/data/2.5/weather"
	params = {'q': city, 'units': 'metric', 'appid': token}
	response = requests.get(url = url, params = params)
	return 'Hello ' + str(response.json()['main']['temp']) + "<img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWZlZmVkYzJiMjQ1NGZjYjVhMTE1OGZiZGZjOTAyMTVjODYwYTk2MiZjdD1n/EY5BzhdImm42Fokwp6/giphy.gif'>"

if __name__ == "__main__":
	app.run()