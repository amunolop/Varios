
from flask import Flask, jsonify, request
import json
import os
from flask_jwt_extended import JWTManager, create_access_token, jwt_required

app = Flask(__name__)

# Set a secret key for JWT
app.config['JWT_SECRET_KEY'] = 'super-secret-key'  # Change this in production
jwt = JWTManager(app)

def get_db_path():
    # Adjust path to point to src/data/db.json
    return os.path.join(os.path.dirname(__file__), 'data', 'db.json')



# JWT-protected GET endpoint to serve data
@app.route('/data', methods=['GET'])
@jwt_required()
def serve_data():
    db_path = get_db_path()
    try:
        with open(db_path, 'r') as f:
            data = json.load(f)
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# JWT-protected POST endpoint to add a new document
@app.route('/data', methods=['POST'])
@jwt_required()
def add_document():
    db_path = get_db_path()
    try:
        new_doc = request.get_json()
        if not new_doc:
            return jsonify({'error': 'No JSON payload provided'}), 400
        # Read existing data
        with open(db_path, 'r') as f:
            data = json.load(f)
        # Append new document
        if isinstance(data, list):
            data.append(new_doc)
        else:
            return jsonify({'error': 'Database is not a list'}), 500
        # Write back to file
        with open(db_path, 'w') as f:
            json.dump(data, f, indent=2)
        return jsonify({'message': 'Document added', 'document': new_doc}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# Login endpoint to issue JWT tokens
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    # Simple authentication: check against db.json
    db_path = get_db_path()
    try:
        with open(db_path, 'r') as f:
            users = json.load(f)
        user = next((u for u in users if u['username'] == username and u['password'] == password), None)
        if not user:
            return jsonify({'error': 'Invalid credentials'}), 401
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
