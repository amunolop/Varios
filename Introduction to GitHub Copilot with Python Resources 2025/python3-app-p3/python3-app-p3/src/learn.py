class Calculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

    def multiply(self, a, b):
        return a * b

    def divide(self, a, b):
        if b == 0:
            raise ValueError("Cannot divide by zero.")
        return a / b

if __name__ == "__main__":
    calc = Calculator()
    x, y = 10, 5
    print(f"{x} + {y} = {calc.add(x, y)}")
    print(f"{x} - {y} = {calc.subtract(x, y)}")
    print(f"{x} * {y} = {calc.multiply(x, y)}")
    print(f"{x} / {y} = {calc.divide(x, y)}")