from utils import get_random_number, read_db_json, add_employee_to_db
from learn import Calculator  # Import the Calculator class

def main():
    print("Welcome to the Python 3 App!")
    max_number = 10  # You can set this to any integer greater than 1
    print(f"Random number: {get_random_number(max_number)}")

    # Test read_db_json
    # try:
    #     db_data = read_db_json()
    #     print("db.json contents:", db_data)
    # except FileNotFoundError:
    #     print("db.json file not found.")
    # except Exception as e:
    #     print("Error reading db.json:", e)

    # Add a new employee
    new_employee = {
        "id": get_random_number(1000),
        "username": "Alice",
        "password": "securepass"
    }
    add_employee_to_db(new_employee)
    print("Added new employee:", new_employee)

    # Interact with Calculator
    calc = Calculator()
    a, b = 7, 3
    print(f"{a} + {b} = {calc.add(a, b)}")
    print(f"{a} - {b} = {calc.subtract(a, b)}")
    print(f"{a} * {b} = {calc.multiply(a, b)}")
    print(f"{a} / {b} = {calc.divide(a, b)}")

if __name__ == "__main__":
    main()