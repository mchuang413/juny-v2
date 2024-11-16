import certifi
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)
CORS(app, supports_credentials=True)

uri = "mongodb+srv://mchuangyc:4M66JTGdJ8HIyQXZ@cluster0.fcc8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(uri, server_api=ServerApi('1'), tlsCAFile=certifi.where())

try:
    client.admin.command('ping')
    print("Pinged development. Connection to MongoDB is successful")
except Exception as e:
    print(e)

db = client["Juny-V2"]
collection = db["users"]

@app.route("/")
def home():
    return "Connected"

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"status": "error", "message": "email and password are required"}), 400

    user = collection.find_one({"email": email})
    if not user:
        return jsonify({"status": "error", "message": "User not found"}), 404

    if user["password"] == password:
        response = jsonify({"status": "success", "message": "Login successful"})
        response.set_cookie("email", email)
        return response, 200
    else:
        return jsonify({"status": "error", "message": "Invalid password"}), 401


@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
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