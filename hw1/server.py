import random
from flask import Flask, render_template
from settings import token1, token2
import requests

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello World!'


@app.route('/weather/<city>')
def weather(city):
    first_url = "https://api.openweathermap.org/data/2.5/weather"
    first_params = {'q': city, 'units': 'metric', 'appid': token1}
    first_response = requests.get(url=first_url, params=first_params)
    print(first_response.json())
    str_first_response = str(first_response.json()['main']['temp'])
    word = "hot"
    degree = float(str_first_response)
    is_hot = True
    if degree > 0:
        degree = 1
    else:
        is_hot = False
        word = "cold"
    second_url = "https://api.giphy.com/v1/gifs/search"
    second_params = {'api_key': token2, 'q': word, 'limit': '25'}
    second_response = requests.get(url=second_url, params=second_params)
    random_index = random.randint(0, 24)
    gif = str(second_response.json()['data'][random_index]['images']['original']['url'])
    return render_template("weather.html", city_for_html=city, is_hot_for_html=is_hot, deg=str_first_response,
                           img_for_weather=gif)


if __name__ == "__main__":
    app.run()
