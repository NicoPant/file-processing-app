import random
import sys
import time


def main():
    time.sleep(2)
    if random.choice([True, False]):
        sys.exit(0)
    else:
        sys.exit(1)


if __name__ == "__main__":
    main()
