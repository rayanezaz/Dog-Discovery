from flask import Flask, request, jsonify

app = Flask(__name__)

# Test route
@app.route("/", methods=["GET"])
def index():
    return "API is running..."

# Login
@app.route("/api/login", methods=["POST"])
def login():
    return jsonify({"message": "Login endpoint"})

# Home
@app.route("/api/home", methods=["GET"])
def home():
    return jsonify({"message": "Home endpoint"})

# Get all dogs (with optional filters)
@app.route("/api/dogs", methods=["GET"])
def get_dogs():
    return jsonify({"message": "List of dogs"})

# Get brief description of a specific dog
@app.route("/api/dogs/<id>/brief", methods=["GET"])
def dog_brief(id):
    return jsonify({"message": f"Brief description for dog {id}"})

# Get specific dog details
@app.route("/api/dogs/<id>", methods=["GET"])
def dog_details(id):
    return jsonify({"message": f"Details for dog {id}"})

# Get more images of a specific dog
@app.route("/api/dogs/<id>/images", methods=["GET"])
def dog_images(id):
    return jsonify({"message": f"Images for dog {id}"})

# Get longer description of a specific dog
@app.route("/api/dogs/<id>/description", methods=["GET"])
def dog_long_description(id):
    return jsonify({"message": f"Longer description for dog {id}"})

# Contact owner of a specific dog
@app.route("/api/dogs/<id>/contact", methods=["POST"])
def contact_owner(id):
    return jsonify({"message": f"Contact owner for dog {id}"})

# AI component: upload/take picture to get dog description
@app.route("/api/ai/describe-dog", methods=["POST"])
def ai_describe_dog():
    return jsonify({"message": "AI dog description endpoint"})

if __name__ == "__main__":
    app.run(debug=True)
