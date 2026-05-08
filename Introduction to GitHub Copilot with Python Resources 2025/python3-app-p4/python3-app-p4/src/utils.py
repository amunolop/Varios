import random
import json
import os

def get_random_number(max_number):
    return random.randint(1, max_number)

def read_db_json():
    data_path = os.path.join(os.path.dirname(__file__), 'data', 'db.json')
    with open(data_path, 'r') as file:
        return json.load(file)

def add_employee_to_db(new_employee):
    """
    Adds a new employee object to the db.json file.
    The db.json file should contain a list of employee objects.
    """
    data_path = os.path.join(os.path.dirname(__file__), 'data', 'db.json')
    # Read existing data
    try:
        with open(data_path, 'r') as file:
            data = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        data = {}

    if isinstance(data, dict):
        # If your db.json is a dict with a key like "employees"
        data = data.get("employees", [])

    # Add the new employee
    data.append(new_employee)

    # Write back to the file
    with open(data_path, 'w') as file:
        json.dump(data, file, indent=4)