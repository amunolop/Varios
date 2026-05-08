from utils import get_random_number
from learn import Calculator  # Import the Calculator class

def main():
    print("Welcome to the Python 3 App!")
    max_number = 10  # You can set this to any integer greater than 1
    print(f"Random number: {get_random_number(max_number)}")

    # Interact with Calculator
    calc = Calculator()
    a, b = 7, 3
    print(f"{a} + {b} = {calc.add(a, b)}")
    print(f"{a} - {b} = {calc.subtract(a, b)}")
    print(f"{a} * {b} = {calc.multiply(a, b)}")
    print(f"{a} / {b} = {calc.divide(a, b)}")

if __name__ == "__main__":
    main()