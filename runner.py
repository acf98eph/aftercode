import subprocess

# Read commands from commands.txt
with open("commands.txt", "r") as f:
    commands = [line.strip() for line in f if line.strip()]

for cmd in commands:
    print(f"\n>>> Running: {cmd}")
    subprocess.run(cmd, shell=True)
