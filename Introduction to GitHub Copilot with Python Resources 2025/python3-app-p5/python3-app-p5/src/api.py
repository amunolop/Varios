from flask import Flask, jsonify
import json
import os

app = Flask(__name__)

def get_db_path():
    # Adjust path to point to src/data/db.json
    return os.path.join(os.path.dirname(__file__), 'data', 'db.json')


# GET endpoint to serve data
@app.route('/data', methods=['GET'])
def serve_data():
    db_path = get_db_path()
    try:
        with open(db_path, 'r') as f:
            data = json.load(f)
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# POST endpoint to add a new document
from flask import request
@app.route('/data', methods=['POST'])
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

if __name__ == '__main__':
    app.run(debug=True)
