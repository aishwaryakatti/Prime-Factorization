def get_prime_factors(n):
    factors = []
    divisor = 2
    while divisor * divisor <= n:
        while n % divisor == 0:
            factors.append(divisor)
            n //= divisor
        divisor += 1
    if n > 1:
        factors.append(n)
    return factors

if __name__ == "__main__":
    try:
        num = int(input("Enter a composite number: "))
        if num <= 1:
            print("Please enter a number greater than 1.")
        else:
            factors = get_prime_factors(num)
            print(f"Prime factors of {num}: {factors}")
    except ValueError:
        print("Invalid input. Please enter an integer.")
