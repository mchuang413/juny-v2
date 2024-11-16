from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)
CORS(app)

uri = "mongodb+srv://mchuangyc:<db_password>@cluster0.fcc8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(uri, server_api=ServerApi('1'))

try:
    client.admin.command('ping')
    print("Pinged development. Connection successful")
except Exception as e:
    print(e)

db = client["Juny-V2"]
collection = db["users"]

@app.route("/login", methods=["POST"])
def login():
    data = request.jsonify
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"status": "error", "message": "email and password are required"}), 400

    user = collection.find_one({"email": email})
    if not user:
        return jsonify({"status" : "NOOOO"})
    if user["password"] == password:
        response = jsonify({"status" : "works"})
        response.set_cookie("email", email)
        return response
    else:
        return jsonify({"status" : "wrong"})

@app.route("/signup", methods=["POST"])
def signup():
    data = request.jsonify
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"status": "error", "message": "email and password are required"}), 400

    if collection.find_one({"email" : email}):
        return jsonify({"status": "error", "message": "Email already exists"}), 400

    collection.insert_one({
        "email" : email,
        "password" : password,
        "premium" : False,
        "temp1" : 0,
        "temp2" : 0,
        "temp3" : 0,
    })

    response = jsonify({"status": "success", "message": "User registered successfully"})
    response.set_cookie("email", email)
    return response, 201

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=True)