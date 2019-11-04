from flask import render_template, url_for, request, redirect, flash, jsonify, json
from flask_sqlalchemy import SQLAlchemy
from app import app, db, bcrypt, jwt
from app.forms import LoginForm, SignupForm
from flask_login import login_user, logout_user, current_user, login_required
from app.models import User, MovieRating
from werkzeug.urls import url_parse
from app.recommender import top_n_movies
from app.all_movies import all_movies
from flask_jwt_extended import (create_access_token)
import pandas as pd
import numpy as np
import sqlite3
from collections import OrderedDict



@app.route('/', methods=['POST', 'GET'])
@app.route('/index', methods=['POST', 'GET'])
def index():
    topN = top_n_movies(50)
    return json.dumps(topN)

@app.route('/browse/<page_number>', methods=['POST', 'GET'])
def browse(page_number):
    movies = all_movies()
    page = int(page_number)
    start = (page - 1) * 48
    end = start + 48
    movies_page = sorted(list(movies))[start:end]
    movies_dict = {i : movies[i] for i in movies_page}
    return json.dumps(movies_dict)

@app.route('/users/login', methods=['GET', 'POST'])
def login():
    username = request.get_json()['username']
    password = request.get_json()['password']
    result = ""
    user = User.query.filter_by(username=username).first()
    if user is None:
        result = jsonify({"Error": "Invalid username or password"})
    elif bcrypt.check_password_hash(user.get_password(), password):
        login_user(user)
        access_token = create_access_token(identity= {"username": user.get_username(),
        "email": user.get_email()})
        result = access_token
    else: 
        result = jsonify({"error": "Invalid username and password"})

    return result

@app.route('/users/register', methods=['GET', 'POST'])
def signup():
    username = request.get_json()['username']
    email = request.get_json()['email']
    password = bcrypt.generate_password_hash(
        request.get_json()['password']).decode('utf-8')
    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    result = {
        'username': username,
        'email': email,
        'password': password
    }
    return jsonify({'result': result})

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))

# Search function
@app.route('/movies', methods=['GET'])
def movies():
    # NOT DONE. HOW TO CONNECT TO TMDB?
    # params from search.js
    #   query: string - substrings to filter for
    #   limit: int - number of items to get
    query = request.args.get('search')
    limit = request.args.get('limit')

    conn = sqlite3.connect("tmdb.db")
    cur = conn.cursor()
    cur.execute("select * from movies where title like '%" +
                query + "%' limit " + str(limit) + ";")

    movies = {}

    for result in cur:
        # index 6: movie title, index 20: poster path
        movies[result[6]] = result[20]
    return json.dumps(dict(movies))


# Show rated movies
@app.route('/rated_movies')
def rated_movies():
    movie_list = MovieRating.query.all()
    rated_movies = []
    # movies = {}

    conn = sqlite3.connect("tmdb.db")
    cur = conn.cursor()
    
    for movie in movie_list:
        # find poster using the title
        query = "select * from movies where title = '" + movie.title + "';"
        cur.execute(query)
        for result in cur:
            # index 20: poster path
            poster = result[20]
        rated_movies.append(
            {'title': movie.title, 'rating': movie.rating, 'poster_path': poster})

    # return json.dumps(dict(rated_movies))

    return jsonify({'movies': rated_movies})


# Add rating to movie
@app.route('/add_rating', methods=['GET', 'POST'])
def add_rating():
    movie_data = request.get_json()

    # check if current rating exists
    # TODO: need to add user_id for MovieRating model
    rating = MovieRating.query.filter_by(title=movie_data['title']).first()
    if rating is not None:
        db.session.delete(rating)
        db.session.commit()

    movie_rating = MovieRating(
        title=movie_data['title'], rating=movie_data['rating'])

    if movie_data['rating'] != 0:
        db.session.add(movie_rating)
        db.session.commit()

    return 'Done', 201
